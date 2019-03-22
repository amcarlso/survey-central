module.exports = {
  addQuestion: async (req, res) => {
    const db = req.app.get('db');
    const { survey, question, options } = req.body;
    const surveyInfo = await db.add_survey({surveyName: survey});
    const questionInfo = await db.add_question({question, surveyId: surveyInfo[0].survey_id});
    const optionInfo = options.map( option => {
      db.add_option({option: option, questionId: questionInfo[0].question_id})
    });
    console.log(options);
    res.status(200).send({
      survey: {
        surveyId: surveyInfo[0].survey_id,
        surveyName: surveyInfo[0].name
      },
      question: {
        questionId: questionInfo[0].question_id,
        questionName: questionInfo[0].name
      },
      options: options
  })
  }
}