from fastapi import Request
import jwt


def authentication_user(request: Request):
    access_token = request.cookies.get("access_token")
    if access_token:
        decoded_token = jwt.decode(access_token, "secret", algorithms=["HS256"])
        print(decoded_token["payload"])
        return decoded_token["payload"]
    else:
        return None
