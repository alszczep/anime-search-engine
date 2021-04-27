import express from 'express';

export const episodes = async(req: express.Request, res: express.Response) => {
    const mal_id = req.params.mal_id;
    const episodes_page = req.params.episodes_page;
    // info page episodes
}