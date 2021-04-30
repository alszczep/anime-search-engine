import express from 'express';
import cors from 'cors';
import path from 'path';
import { router as userRouter } from './routes/user';
import { router as animeRouter } from './routes/anime';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('front-end/build'))
if(process.env.NODE_ENV === 'production')
    app.use(express.static('front-end/build'))

app.use('/api/user', userRouter);
app.use('/api/anime', animeRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
})

app.listen(PORT, () => {
    console.log('Server started. Listening on port 5000...')
});