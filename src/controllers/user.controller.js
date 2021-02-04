const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

  async list(req,res) {
    try{
      const users = await User.find()
      res.status(200).json(users)
    }
    catch(err){
      res.status(400).json(err)
    }
  },

  async show(req,res){
    try{
      const { id } = req.params
      
      const user = await User.findById(id)
      res.status(200).json(user)
      
    }catch(err){
      res.status(400).json(err);
    }
  },

  async signup(req, res) {
    try {
      
      const { email, password } = req.body;
      const encryptedPassword = await bcrypt.hash(password, 8);
      const user = await User.create({ email, password: encryptedPassword });

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 * 365 }
      );

      res.status(200).json({ token });
    } catch(err) {
      res.status(400).json(err);
    }
  },
  async signin(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if(!user) {
        throw Error('User does not exist');
      }

      const isValid = await bcrypt.compare(password, user.password);

      if(!isValid) {
        throw Error('User/Password invalid!');
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 * 365 }
      );

      res.status(200).json({ token: token, user: user });
    } catch(err) {
      res.status(401).json({ message: err.message })
    }
  }

} 


