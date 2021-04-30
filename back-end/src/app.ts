import express from 'express';
import cors from 'cors';
import { router as userRouter } from './routes/user';
import { router as animeRouter } from './routes/anime';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/anime', animeRouter);

app.listen(PORT, () => {
    console.log('Server started. Listening on port 5000...')
});