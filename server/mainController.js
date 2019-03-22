module.exports = {
  addQuestion: async (req, res) => {
    const db = req.app.get('db');
    const { survey, question, options, surveyId } = req.body;
    const surveyExists = await db.check_survey_id({surveyId: surveyId});
    let surveyInfo = [];
    if (surveyExists.length < 1) {
      surveyInfo = await db.add_survey({surveyName: survey});
    } else {
      surveyInfo.push({survey_id: surveyId});
    }
    console.log(surveyInfo)
    const questionInfo = await db.add_question({question, surveyId: surveyInfo[0].survey_id});
    const optionInfo = options.map( option => {
      db.add_option({option: option, questionId: questionInfo[0].question_id})
    });
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