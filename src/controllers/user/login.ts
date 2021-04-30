import { generateJwtToken } from './../../modules/generate-jwt-token';
import express from 'express';
import bcrypt from 'bcrypt';
import { pool } from '../../database';

export const login = async(req: express.Request, res: express.Response) => {
    const { username, password } = req.body;
    try{
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if(user.rows.length < 1)
            return res.status(401).json({ error: 'User does not exist' });

        const isPasswordValid = await bcrypt.compare(password, user.rows[0].password)
        if(!isPasswordValid)
            return res.status(401).json({ error: 'Invalid password' });
        
        const token = generateJwtToken(user.rows[0].user_id);
        return res.status(200).json({ jwtToken: token })
    }catch(error:any){
        return res.status(500).json({ error: 'Server error', errorObj: error});
    }
}