import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import express from 'express';
dotenv.config();

export const validateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.header('jwtToken');
    if(!token)
        return res.status(401).json({ error: 'Token not provided'})
    try{
        const isTokenValid = jwt.verify(token, process.env.jwtSecretKey);
        if(!isTokenValid)
            return res.status(401).json({ error: 'Token is invalid' })
        req.body.token_data = isTokenValid;
        next();
    }catch{
        return res.status(401).json({ error: 'Token is invalid' })
    }
}