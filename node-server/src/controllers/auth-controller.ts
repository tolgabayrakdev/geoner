import { Request, Response } from 'express';
import { AuthService } from '../services/auth-service';

interface LoginRequest {
  email: string;
  password: string;
}

export class AuthController {
  private authService = new AuthService();
  public login = async (req: Request, res: Response): Promise<void> => {
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
      res.status(500).json({ success: false, message: error.message });
    }
  };
}
