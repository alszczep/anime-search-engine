import express from 'express';
import { pool } from '../../database';
import { fetchData } from '../../modules/fetch-data';

export const like = async(req: express.Request, res: express.Response) => {
    const mal_id = req.params.mal_id;
    const { user_id } = req.body.token_data;
    try{
        const listItems = await pool.query('SELECT * FROM list_items WHERE mal_id=$1 AND user_id=$2', [mal_id, user_id])
        if(listItems.rows.length > 0){
            await pool.query('DELETE FROM list_items WHERE mal_id=$1 AND user_id=$2', [mal_id, user_id])
            return res.status(200).json({ action: 'unliked' });
        }
        const animes = await pool.query('SELECT * FROM animes WHERE mal_id=$1', [mal_id])
        if(animes.rows.length < 1){
            const animeData = await fetchData(`https://api.jikan.moe/v3/anime/${mal_id}`, 'GET');
            await pool.query('INSERT INTO animes (mal_id, title) VALUES ($1, $2)', [mal_id, animeData.title])
        }
        await pool.query('INSERT INTO list_items (user_id, mal_id) VALUES ($1, $2)', [user_id, mal_id])
        return res.status(200).json({ action: 'liked' });
    }catch(error: any){
        return res.status(500).json({ error: 'Server error', errorObj: error});
    }
}