const bcrypt = require('bcryptjs');
module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');
    const { name, email, password } = req.body;
    const checkEmail = await db.check_email({email: email}); // checking to see if email is already in use
    console.log(checkEmail)
    if (checkEmail.length > 0) {
      res.status(200).send({message: 'Email Already In Use'}) 
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt); //salt and hash the password
    const newUserArray = await db.add_user({name: name, email: email, hash: hash});
    console.log(newUserArray)
    req.session.user = {
      id: newUserArray[0].user_id,
      name: newUserArray[0].name,
      email: newUserArray[0].email
    }
    res.status(200).send({user: req.session.user})
  }
}