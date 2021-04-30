import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import express from 'express';
dotenv.config();
import { pool } from '../../database';
import { fetchData } from '../../modules/fetch-data';
import { parse } from 'uuid';

export const info = async(req: express.Request, res: express.Response) => {
    const mal_id = req.params.mal_id;
    const token = req.header('jwtToken');
    if(token){
        const tokenData = jwt.verify(token, process.env.jwtSecretKey);
        req.body.token_data = tokenData;
    }
    try{
        const result = await fetchData(`https://api.jikan.moe/v3/anime/${mal_id}`, 'GET');
        const filteredResult = { 
            title: result.title,
            synopsis: result.synopsis,
            rank: result.rank, 
            score: result.score, 
            image_url: result.image_url,
            opening_themes: result.opening_themes,
            ending_themes: result.ending_themes,
            airing: result.airing,
            aired: result.aired.string,
            broadcast: result.broadcast,
            duration: result.duration,
            genres: result.genres.map((item: any) => item.name ),
            mal_url: result.url,
            likes: (await pool.query('SELECT * FROM list_items WHERE mal_id=$1', [mal_id]))?.rows?.length,
            user_like: (token?((await pool.query('SELECT * FROM list_items WHERE mal_id=$1 AND user_id=$2', [mal_id, parse(req.body.token_data.user_id)]))?.rows?.length) > 0: false),
        };
        res.status(200).json(filteredResult);
    }catch(error: any){
        res.status(500).json({ error: 'Server error', errorObj: error});
    }
}