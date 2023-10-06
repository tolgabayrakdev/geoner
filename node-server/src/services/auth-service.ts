import pool from '../db';
import { Helper } from '../utils/helper';

interface UserSchema {
  username: string;
  email: string;
  password: string;
}

export class AuthService {
  private helper = new Helper();

  public async login(email: string, password: string): Promise<object> {
    const hashedPassword = this.helper.generateHashPassword(password);
    const text = `
            SELECT * FROM users
            WHERE email = $1 and password = $2
        `;
    const result = await pool.query(text, [email, hashedPassword]);
    if (result.rows.length === 0) {
      throw new Error('User not found!');
    }
    const user = result.rows[0];
    const payload = {
      id: user.id,
      email: user.email,
    };
    const accessToken = this.helper.generateAccessToken(payload);
    const refreshToken = this.helper.generateRefreshToken(payload);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  public async register(payload: UserSchema): Promise<object> {
    const { username, email, password } = payload;
    const hashedPassword = this.helper.generateHashPassword(password);
    const text = `
            INSERT INTO users(
                username, email, password, created_at, updated_at
            )
            VALUES($1, $2, 3$)
        `;
    try {
      await pool.query('BEGIN');
      const newUser = await pool.query(text, [username, email, hashedPassword]);
      await pool.query('COMMIT');
      return newUser;
    } catch (error: any) {
      await pool.query('ROLLBACK');
      throw new Error(error);
    }
  }
}
