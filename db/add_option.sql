INSERT INTO option (content, question_id) 
VALUES (${option}, ${questionId})
returning *;