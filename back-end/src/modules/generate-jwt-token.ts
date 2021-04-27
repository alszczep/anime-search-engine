import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

export const generateJwtToken = (id: string): string => {
    return jwt.sign(
        {
            user_id: id
        },
        process.env.jwtSecretKey,
        {
            expiresIn: '1d'
        }
    )
}