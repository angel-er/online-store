const {Schema, model} = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const ClientSchema = new Schema(
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

// clientSchema.methods.hashedPassword = async (password) => {
//   const salt = await bcryptjs.genSalt(10);

//   return await bcryptjs.hash(password, salt);
// };

ClientSchema.methods.matchPassword = async function (password) {
  const client = this;

  return await bcryptjs.compare(password, client.password);
};

ClientSchema.pre('save', async function (next) {
  const client = this;

  const salt = await bcryptjs.genSalt(10);

  if (client.isModified('password')) {
    client.password = await bcryptjs.hash(client.password, salt);
  }

  next();
});

// clientSchema.pre('remove', async function(next) {
//   const client = this;

//   await Task.deleteMany({owner: client._id});

//   next();
// });

module.exports = model('Client', ClientSchema);
