const { Schema, model, models } = require('mongoose');

const emailRegExp = new RegExp('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}');

const uniqueEmail = {
  validator(email) {
    return models.User.findOne({ email })
      .then(user => !user)
      .catch(() => false);
  }, message: 'email already exists'
};

const userSchema = new Schema({

  password: {
    type: 'String',
    required: [true, 'password is required']
  },

  email: {
    type: 'String',
    match: [emailRegExp, 'invalid email'],
    required: true,
    validate: [uniqueEmail]
  },


}, {
  timestamps: true
})

const User = model('User', userSchema);

module.exports = User;


