const {Schema, model} = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const UserSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    address: String,
    dni: {type: String, trim: true},
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      validate(email) {
        if (!validator.isEmail(email)) {
          console.log(validator.isEmail(email));
          throw new Error('Email is not valid');
        }
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
      min: 5,
      validate(password) {
        if (password.toLowerCase().includes('password')) {
          throw new Error('Password can not contain "password"');
        }
      },
    },
    avatar: Buffer,
  },
  {timestamps: true}
);

// UserSchema.methods.hashedPassword = async (password) => {
//   const salt = await bcryptjs.genSalt(10);

//   return await bcryptjs.hash(password, salt);
// };

UserSchema.methods.matchPassword = async function (password) {
  const user = this;

  return await bcryptjs.compare(password, user.password);
};

UserSchema.pre('save', async function (next) {
  const user = this;

  const salt = await bcryptjs.genSalt(10);

  if (user.isModified('password')) {
    user.password = await bcryptjs.hash(user.password, salt);
  }

  next();
});

// userSchema.pre('remove', async function(next) {
//   const user = this;

//   await Task.deleteMany({owner: user._id});

//   next();
// });

module.exports = model('User', UserSchema);
