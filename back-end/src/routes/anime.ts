import { episodes } from './../controllers/anime/episodes';
import { info } from './../controllers/anime/info';
import { validateBody } from './../middleware/validate-body';
import express from 'express';
import { search } from '../controllers/anime/search';

export const router = express.Router();

router.post('/search', validateBody, search);
router.post('/info/:mal_id', validateBody, info);
router.post('/info/:mal_id/episodes/:episodes_page', validateBody, episodes);