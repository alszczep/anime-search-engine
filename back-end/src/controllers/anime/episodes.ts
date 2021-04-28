import express from 'express';
import { fetchData } from '../../modules/fetch-data';

export const episodes = async(req: express.Request, res: express.Response) => {
    const mal_id = req.params.mal_id;
    const episodes_page = req.params.episodes_page;
    try{
        const result = await fetchData(`https://api.jikan.moe/v3/anime/${mal_id}/episodes/${episodes_page}`, 'GET');
        const filteredResult = { 
            episodes_last_page: result.episodes_last_page,
            episodes: result.episodes.map((item: any) => ({
                episode_id: item.episode_id,
                title: item.title
            }))
        };
        res.status(200).json(filteredResult);
    }catch(error: any){
        res.status(500).json({ error: 'Server error', errorObj: error});
    }
}