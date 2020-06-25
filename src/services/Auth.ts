import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const authService = {
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
  },
  crypt: (text: string): string =>
    CryptoJS.AES.encrypt(
      text,
      process.env.B_CRYPT_SALT || 'ijfw9-48etfw',
    ).toString(),
  decrypt: (text: string): string =>
    CryptoJS.AES.decrypt(
      text,
      process.env.B_CRYPT_SALT || 'ijfw9-48etfw',
    ).toString(),
  hash: async (text: string): Promise<string> => {
    // eslint-disable-next-line radix
    const rounds = parseInt(process.env.BCRYPT_PASSWORD_SALT  || '10');
    const salt = await bcrypt.genSalt(
      rounds,
    );
    return bcrypt.hash(text, salt);
  },
  compare: (text: string, hash: string): Promise<boolean> =>
    bcrypt.compare(text, hash),
};

export default authService;
