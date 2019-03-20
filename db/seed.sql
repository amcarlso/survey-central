-- user table
CREATE TABLE user_account (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(80) not null,
    email VARCHAR(80) not null,
    hash VARCHAR(200) not null
);

-- survey table
CREATE TABLE survey (
    survey_id SERIAL PRIMARY KEY,
    name VARCHAR(360) NOT NULL,
    times_taken INTEGER DEFAULT 0
);

-- question table
CREATE TABLE question (
    question_id SERIAL PRIMARY KEY,
    question VARCHAR(400) NOT NULL,
    survey_id INT REFERENCES survey(survey_id)
);

-- option table
CREATE TABLE option (
    option_id SERIAL PRIMARY KEY,
    content VARCHAR(400) NOT NULL,
    times_chosen INT DEFAULT 0,
    question_id INT REFERENCES question(question_id)
);


-- insert user
INSERT INTO user_account (name, email, hash)
VALUES (${name}, ${email}, ${hash});