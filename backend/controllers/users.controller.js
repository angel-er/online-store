const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(e);
  }
};

exports.getUser = async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({message: 'User is not found.'});
  }
};

exports.createUser = async (req, res) => {
  const {email, password} = req.body;
  const newUser = await new User({email, password});

  try {
    // newUser.password = await newUser.hashedPassword(password);
    await newUser.save();
    res.status(200).send({message: newUser});
  } catch (error) {
    if (error.name === 'MongoError' && error.keyPattern.email) {
      res.status(400).send({message: 'Email is already exists.'});
    } else {
      res.status(400).send({message: error.errors.email.message});
    }
  }
};

exports.deleteUser = async (req, res) => {
  const _id = req.params.id;
  const user = await User.findByIdAndDelete(_id);

  if (!user) {
    res
      .status(404)
      .send({message: 'The User was not deleted because it was not found.'});
  }
  res.status(200).send(user);
};

exports.updateUser = async (req, res) => {
  const {firstname, lastname, address} = req.body;
  const userUpdated = await User.findByIdAndUpdate(req.params.id, {
    firstname,
    lastname,
    address,
  });

  res.send({message: userUpdated});
};
