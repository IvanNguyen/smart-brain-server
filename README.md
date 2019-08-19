# smart-brain-server
NodeJS server demo

# Postgres Database
CREATE TABLE login (
    id serial PRIMARY KEY,
    hash VARCHAR(100) NOT NULL,
    email text UNIQUE NOT NULL
);

CREATE TABLE login (
    id serial PRIMARY KEY,
    hash VARCHAR(100) NOT NULL,
    email text UNIQUE NOT NULL
);
