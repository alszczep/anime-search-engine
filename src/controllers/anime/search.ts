import express from 'express';
import { fetchData } from '../../modules/fetch-data';

export const search = async(req: express.Request, res: express.Response) => {
    try{
        const { query, adult_content } = req.body;
        const result = await fetchData(`https://api.jikan.moe/v3/search/anime?q=${query}`, 'GET');
        let filteredResult = result.results;
        if(!adult_content)
            filteredResult = filteredResult.filter((item: any) => (item.rated !== 'Rx' && item.rated !== 'R+' && item.rated !== 'R'));
        const mappedResult = filteredResult.map((item: any) => ({ 
            mal_id: item.mal_id, 
            title: item.title, 
            image_url: item.image_url 
        }))
        res.status(200).json(mappedResult);
    }catch(error: any){
        res.status(500).json({ error: 'Server error', errorObj: error});
    }
}