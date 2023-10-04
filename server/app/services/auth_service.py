from fastapi.exceptions import HTTPException
from database import connection
from utils.helper import Helper
import psycopg2
import smtplib
from email.message import EmailMessage


class AuthService:
    @classmethod
    def login(self, email: str, password: str):
        curr = connection.cursor()
        hash_password = Helper.generate_hash_password(password=password)
        try:
            sender = "from@example.com"
            receiver = "to@example.com"
            message = f"""\
            Subject: Hi Mailtrap
            To: {receiver}
            From: {sender}

            This is a test e-mail message."""


            with smtplib.SMTP("sandbox.smtp.mailtrap.io", 2525) as server:
                server.login("d225eaf7a363a3", "79b349db43a223")
                server.sendmail(sender, receiver, message)
                print("OK")
            curr.execute(
                "SELECT * FROM users WHERE email = %s and password = %s",
                (email, hash_password),
            )
            data = curr.fetchall()
            connection.commit()
            if data:
                access_token = Helper.generate_access_token(
                    {"id": data[0][0], "email": data[0][1]}
                )
                refresh_token = Helper.generate_access_token(
                    {"id": data[0][0], "email": data[0][1]}
                )
                return {"access_token": access_token, "refresh_token": refresh_token}
            else:
                raise HTTPException(status_code=404, detail="User not found!")
        except psycopg2.DatabaseError as error:
            connection.rollback()
            return error
        finally:
            curr.close()

    @classmethod
    def register(self, data: dict):
        curr = connection.cursor()
        try:
            hash_password = Helper.generate_hash_password(data.password)
            curr.execute(
                """
                INSERT INTO users(username, email, password, role_id, created_at, updated_at)
                VALUES(%s, %s, %s, %s, now(), now())
                """,
                (data.username, data.email, hash_password, 1),
            )
            connection.commit()
        except Exception as e:
            connection.rollback()
            raise HTTPException(status_code=400, detail=str(e))
        finally:
            curr.close()

    @classmethod
    def generate_reset_token(self, email: str):
        curr = connection.cursor()
        try:
            curr.execute(
                "SELECT * FROM users WHERE email = %s",
                (email,)
            )
            data = curr.fetchone()
            user_id = data[0]
            curr.execute(
                """
                INSERT INTO user_reset_password(
                user_id, token, expire_time
                )
                """
            )
            connection.commit()
            
        except Exception as e:
            print(e)
            raise HTTPException(status_code=404, detail="Email address not found!")
        finally:
            curr.close()

    @classmethod
    def token_check_and_change_password(self, token: str):
        pass