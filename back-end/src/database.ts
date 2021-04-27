import pg from 'pg';

export const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    port: 5432,
    database: 'animelist'
})