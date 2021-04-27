-- paste each command separately using psql command line

CREATE DATABASE animelist;

\d animelist

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE animes(
    mal_id INT,
    title VARCHAR(255) NOT NULL,
    PRIMARY KEY(mal_id)
);

CREATE TABLE list_items(
    like_id SERIAL,
    user_id UUID NOT NULL,
    mal_id INT NOT NULL,
    PRIMARY KEY(like_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(mal_id) REFERENCES animes(mal_id)
);