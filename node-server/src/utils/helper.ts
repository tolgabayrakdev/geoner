import Crypto from 'crypto';
import Jwt from 'jsonwebtoken';

export class Helper {
  /**
   * generateAccessToken
   */
  public generateAccessToken(payload: object): string {
    return Jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1h',
    });
  }

  /**
   * generateRefreshToken
   */
  public generateRefreshToken(payload: object): string {
    return Jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '7d',
    });
  }

  /**
   * generateHashPassword
   */
  public generateHashPassword(password: string): string {
    return Crypto.createHash('sha256').update(password).digest('base64');
  }
}
