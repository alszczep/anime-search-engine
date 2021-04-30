import express from 'express';
import { pool } from '../../database';

export const user = async(req: express.Request, res: express.Response) => {
    const { user_id } = req.body.token_data;
    try{
        const list = await pool.query('SELECT username, email FROM users WHERE user_id=$1', [user_id]);
        const { username, email } = list.rows[0];
        return res.status(200).json({ username, email });
    }catch(error: any){
        return res.status(500).json({ error: 'Server error', errorObj: error});
    }
}