import {Request, Response,  NextFunction } from "express";


function exampleHandler(req: Request, res: Response, next: NextFunction) {
    const err: any = new Error("Deneme");
    err.status = 404;
    next(err);
}


export default exampleHandler;