import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/http-exception";


function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    console.log("MIDDLEWARE");
    console.log("MIDDLEWARE");
    console.log("MIDDLEWARE");
    console.log("MIDDLEWARE");
    console.log("MIDDLEWARE");

    const status = error.status || 500;
    const message = error.message || 'Something went wrong.';
    res.status(status).send({status, message});
}

export default errorMiddleware;
