INSERT INTO user_account (name, email, hash)
VALUES (${name}, ${email}, ${hash})
RETURNING *;