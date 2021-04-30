import { generateJwtToken } from './../../modules/generate-jwt-token';
import express from 'express';
import bcrypt from 'bcrypt';
import { pool } from '../../database';

export const register = async(req: express.Request, res: express.Response) => {
    const { username, email, password } = req.body;
    try{
        if((await pool.query('SELECT * FROM users WHERE username = $1', [username])).rows.length > 0)
            return res.status(409).json({ error: 'Username already taken' });
        if((await pool.query('SELECT * FROM users WHERE email = $1', [email])).rows.length > 0)
            return res.status(409).json({ error: 'Email already taken' });

        const encryptedPassword = await bcrypt.hash(password, await bcrypt.genSalt(6))
        const user = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, encryptedPassword]);
        const token = generateJwtToken(user.rows[0].user_id);
        return res.status(200).json({ jwtToken: token })
    }catch(error:any){
        return res.status(500).json({ error: 'Server error', errorObj: error});
    }
}