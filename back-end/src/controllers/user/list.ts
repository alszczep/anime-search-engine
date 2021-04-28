import express from 'express';
import { pool } from '../../database';

export const list = async(req: express.Request, res: express.Response) => {
    const { user_id } = req.body.token_data;
    try{
        const list = await pool.query('SELECT title FROM animes JOIN list_items ON animes.mal_id=list_items.mal_id WHERE list_items.user_id=$1', [user_id]);
        return res.status(200).json({ titles: list.rows.map((item: any) => (item.title)) });
    }catch(error: any){
        return res.status(500).json({ error: 'Server error', errorObj: error});
    }
}