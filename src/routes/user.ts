import { list } from './../controllers/user/list';
import { validateToken } from './../middleware/validate-token';
import { validateBody } from './../middleware/validate-body';
import express from 'express';
import { login } from '../controllers/user/login';
import { register } from '../controllers/user/register';
import { user } from '../controllers/user/user';
import { email } from '../controllers/user/email';

export const router = express.Router();

router.post('/register', validateBody, register);
router.post('/login', validateBody, login);
router.get('/list', validateToken, validateBody, list);
router.get('/user', validateToken, validateBody, user);
router.post('/email', validateToken, validateBody, email);