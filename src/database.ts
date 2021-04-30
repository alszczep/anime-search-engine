import pg from 'pg';
import dotenv from 'dotenv'
dotenv.config();

const devConfig = {
    host: process.env.pgHost,
    user: process.env.pgUser,
    password: process.env.pgPassword,
    port: parseInt(process.env.pgPort),
    database: process.env.pgDatabase
}

export const pool = new pg.Pool(process.env.NODE_ENV === 'production'? { connectionString: process.env.DATABASE_URL }: devConfig)