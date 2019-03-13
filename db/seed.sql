CREATE TABLE user_account (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(80) not null,
    username VARCHAR(80) not null,
    password VARCHAR(80) not null
);

