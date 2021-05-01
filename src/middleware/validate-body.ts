import { isPasswordValid } from './../modules/is-password-valid';
import { isEmailValid } from './../modules/is-email-vaild';
import express from 'express';
import jwt from 'jsonwebtoken';

const loginLength = 4;
const passwordLength = 8;




export const validateBody = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // USER
    if(req.path === '/register'){
        const { username, email, password } = req.body;
        if(!username || !email || !password)
            return res.status(400).json({ error: 'Missing registration data' })
        if(username.length < loginLength)
            return res.status(422).json({ error: 'Username is too short (min. 4 characters)' })
        if(!isEmailValid(email))
            return res.status(422).json({ error: 'Email is invalid' })
        if(password.length < passwordLength)
            return res.status(422).json({ error: 'Password is too short (min. 8 characters)' })
        if(!isPasswordValid(password))
            return res.status(422).json({ error: 'Password does not meet the security rules (uppercase letter, lowercase letter, a digit)' })
    }
    if(req.path === '/login'){
        const { username, password } = req.body;
        if(!username || !password)
            return res.status(400).json({ error: 'Missing login data' })
        if(username.length < loginLength)
            return res.status(422).json({ error: 'Username is too short (min. 4 characters)' })
        if(password.length < passwordLength)
            return res.status(422).json({ error: 'Password is too short (min. 8 characters)' })
        if(!isPasswordValid(password))
            return res.status(422).json({ error: 'Password does not meet the security rules (uppercase letter, lowercase letter, a digit)' })
    }
    if(req.path === '/list'){
        const { user_id } = req.body.token_data;
        if(!user_id)
            return res.status(400).json({ error: 'User id not provided' })
    }
    if(req.path === '/user'){
        const { user_id } = req.body.token_data;
        if(!user_id)
            return res.status(400).json({ error: 'User id not provided' })
    }
    if(req.path === '/email'){
        const { email, password } = req.body;
        if(!email || !password)
            return res.status(400).json({ error: 'Missing email change data' })
        if(!isEmailValid(email))
            return res.status(422).json({ error: 'Username is too short (min. 4 characters)' })
    }

    // ANIME
    if(req.path === '/search'){
        const { query, adult_content } = req.body;
        if(!query)
            return res.status(400).json({ error: 'Query not provided' })
        if(query.length < 3)
            return res.status(422).json({ error: 'Query is too shot (min. 3 characters)' })
        if(adult_content === undefined || adult_content === null)
            return res.status(400).json({ error: 'Adult content info not provided' })
    }
    if(req.path === '/info/:mal_id'){
        const mal_id = req.params.mal_id;
        if(!mal_id)
            return res.status(400).json({ error: 'Mal id not provided' })
    }
    if(req.path === '/info/:mal_id/episodes/:episodes_page'){
        const mal_id = req.params.mal_id;
        const episodes_page = req.params.mal_id;
        if(!mal_id)
            return res.status(400).json({ error: 'Mal id not provided' })
        if(!episodes_page)
            return res.status(400).json({ error: 'Episodes page not provided' })
    }
    if(req.path === '/info/like/:mal_id'){
        const mal_id = req.params.mal_id;
        const { user_id } = req.body.token_data;
        if(!mal_id)
            return res.status(400).json({ error: 'Mal id not provided' })
        if(!user_id)
            return res.status(400).json({ error: 'User id not provided' })
    }
    next();
}