const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
  {
    username: {type: String, required: true, trim: true},
    email: {
      type: String,
      required: true,
      trim: true,
      validate: (v) => {
        console.log('Validacion del mail: ' + v);
      },
    },
    password: {type: String, trim: true, required: true, min: 5},
  },
  {timestamps: true}
);

module.exports = model('User', UserSchema);
