import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/auth-service';

interface LoginRequest {
  email: string;
  password: string;
}

export class AuthController {
  private authService = new AuthService();
  public login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { email, password }: LoginRequest = req.body;
      const result: any = await this.authService.login(email, password);
      res.cookie('access_token', result.access_token, {
        httpOnly: true,
      });
      res.cookie('refresh_token', result.refresh_token, {
        httpOnly: true,
      });
      res.status(200).json({ success: true, message: 'Login is sucessful.' });
    } catch (error: any) {
      //next(error)
      res.status(error.status).json({ message: error.message });
    }
  };

  public register = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      await this.authService.register(data);
      res
        .status(201)
        .json({ success: true, message: 'User created succesful.' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public logout = async (req: Request, res: Response): Promise<void> => {
    try {
      res.clearCookie("access_token");
      res.clearCookie("refresh_token");
      res.status(200).json({success: true, message: "Log out succesful." })
    } catch (err) {
      res.status(500).json({success: false, message: "Internal Server Error"})
    }
  }
}
