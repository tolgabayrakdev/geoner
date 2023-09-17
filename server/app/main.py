from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.auth_router import auth_router
from dotenv import load_dotenv
import os
from os.path import join, dirname


app = FastAPI()


dotenv_path = join(dirname(__file__), '../.env.development')
load_dotenv(dotenv_path)

origins = ["http://localhost:5173", "https://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def hello():
    return {"Hello": os.getenv("name")}


app.include_router(auth_router, prefix="/api/v1/auth")
