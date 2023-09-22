from fastapi import Request, HTTPException
import jwt


def authentication_user(request: Request):
    try:
        access_token = request.cookies.get("access_token")
        if access_token:
            decoded_token = jwt.decode(access_token, "secret", algorithms=["HS256"])
            return decoded_token["payload"]
        else:
            return None
    except jwt.exceptions.InvalidSignatureError:
        raise HTTPException(status_code=403, detail="Invalid access token.")
    except jwt.exceptions.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Access token has expired.")