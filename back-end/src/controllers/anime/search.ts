import express from 'express';
import { Body } from 'node-fetch';
import { fetchData } from '../../modules/fetch-data';

export const search = async(req: express.Request, res: express.Response) => {
    try{
        const { query } = req.body;
        const result = await fetchData(`https://api.jikan.moe/v3/search/anime?q=${query}`, 'GET');
        const filteredResult = result.results.map((item: any) => ({ 
            mal_id: item.mal_id, 
            title: item.title, 
            image_url: item.image_url 
        }))
        res.status(200).json(filteredResult);
    }catch(error: any){
        res.status(500).json({ error: 'Server error', errorObj: error});
    }
}