-- user table
CREATE TABLE user_account (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(80) not null,
    email VARCHAR(80) not null,
    hash VARCHAR(200) not null
);


-- insert user
INSERT INTO user_account (name, email, hash)
VALUES (${name}, ${email}, ${hash});