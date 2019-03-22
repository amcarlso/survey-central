INSERT INTO question (question, survey_id)
VALUES (${question}, ${surveyId})
returning *;