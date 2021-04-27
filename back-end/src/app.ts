import express from 'express';
import cors from 'cors';
import { router as userRouter } from './routes/user';
import { router as animeRouter } from './routes/anime';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/anime', animeRouter);

app.listen(5000, () => {
    console.log('Server started. Listening on port 5000...')
});