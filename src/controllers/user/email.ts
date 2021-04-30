import express from 'express';
import bcrypt from 'bcrypt';
import { pool } from '../../database';

export const email = async(req: express.Request, res: express.Response) => {
    const { user_id } = req.body.token_data;
    const { email, password } = req.body;
    try{
        const user = await pool.query('SELECT * FROM users WHERE user_id=$1', [user_id]);
        const isPasswordValid = await bcrypt.compare(password, user.rows[0].password)
        if(!isPasswordValid)
            return res.status(401).json({ error: 'Invalid password' });
        if(user.rows[0].email === email)
            return res.status(401).json({ error: 'New email has to be diffrent' });
        const isEmailTaken = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
        if(isEmailTaken.rows.length > 0)
            return res.status(401).json({ error: 'Email already taken' });
        await pool.query('UPDATE users SET email=$1 WHERE user_id=$2', [email, user_id]);
        return res.status(200).json({ success: true });
    }catch(error: any){
        return res.status(500).json({ error: 'Server error', errorObj: error});
    }
}