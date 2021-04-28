import express from 'express';
import jwt from 'jsonwebtoken';

const loginLength = 4;
const passwordLength = 8;

const isEmailValid = (email: string) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
const isPasswordValid = (password: string): boolean => {
    return (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password));
} 

export const validateBody = (req: express.Request, res: express.Response, next: express.NextFunction) => {
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
    if(req.path === '/search'){
        const { query } = req.body;
        if(!query)
            return res.status(400).json({ error: 'Query not provided' })
        if(query.length < 3)
            return res.status(422).json({ error: 'Query is too shot (min. 3 characters)' })
    }
    next();
}