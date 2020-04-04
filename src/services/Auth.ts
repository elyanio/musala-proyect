import jwt from 'jsonwebtoken';

interface AuthService {
  idFromToken: (token?: string) => string | undefined;
  tokenFromId: (id: string | undefined) => string | undefined;
}

const AuthService = {
  idFromToken: (token?: string): string | null => {
    if (!token) return null;
    let sign;
    try {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const secret = process.env.APP_SECRET!;
      sign = jwt.verify(token, secret) as { id: string };
    } catch (error) {
      return null;
    }
    return sign.id;
  },

  tokenFromId: (id: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const secret = process.env.APP_SECRET!;
    return jwt.sign({ id }, secret);
  }
};

export default AuthService;
