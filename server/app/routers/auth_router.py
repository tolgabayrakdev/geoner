from fastapi import APIRouter
from fastapi import Response
from schemas.user import UserLogin, UserRegister
from services.auth_service import AuthService


auth_router = APIRouter()


@auth_router.post("/login")
async def login(user: UserLogin, response: Response):
    data = AuthService.login(user.email, user.password)
    if data:
        response.set_cookie(key="access_token", value=data["access_token"], httponly=True)
        response.set_cookie(key="access_token", value=data["access_token"], httponly=True)
        return {"access_token": data["access_token"], "refresh_token": data["refresh_token"]}


@auth_router.post("/register", status_code=201)
async def register(user: UserRegister):
    AuthService.register(user)
    return {"message": "User created successful."}