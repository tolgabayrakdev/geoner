from fastapi import APIRouter
from fastapi import Response, Depends, HTTPException
from schemas.user import UserLogin, UserRegister
from services.auth_service import AuthService
from depends.authentication_user import authentication_user

auth_router = APIRouter()


@auth_router.post("/login")
async def login(user: UserLogin, response: Response):
    data = AuthService.login(user.email, user.password)
    if data:
        response.set_cookie(key="access_token", value=data["access_token"], httponly=True, secure=True, samesite='none')
        response.set_cookie(key="refresh_token", value=data["refresh_token"], httponly=True, secure=True, samesite='none')
        return {"access_token": data["access_token"], "refresh_token": data["refresh_token"]}


@auth_router.post("/register", status_code=201)
async def register(user: UserRegister):
    AuthService.register(user)
    return {"message": "User created successful."}



@auth_router.post("/logout")
async def logout(response: Response):
    response.delete_cookie("access_token")
    response.delete_cookie("refresh_token")
    return {"messsage": "you are logged out."}


@auth_router.get("/secret")
def secret(user: dict = Depends(authentication_user)):
    if not user:
        raise HTTPException(status_code=401, detail="Authentication failed!")
    return {"message": "secret router", "user": user}


