import { list } from './../controllers/user/list';
import { validateToken } from './../middleware/validate-token';
import { validateBody } from './../middleware/validate-body';
import express from 'express';
import { login } from '../controllers/user/login';
import { register } from '../controllers/user/register';

export const router = express.Router();

router.post('/register', validateBody, register);
router.post('/login', validateBody, login);
router.get('/list', validateBody, validateToken, list);