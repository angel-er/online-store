const Client = require('../models/Client');

exports.getUsers = async (req, res) => {
  try {
    const clients = await Client.find({});

    res.status(200).send(clients);
  } catch (error) {
    res.status(500).send(e);
  }
};

exports.getUser = async (req, res) => {
  const _id = req.params.id;

  try {
    const client = await Client.findById(_id);
    res.status(200).send(client);
  } catch (error) {
    res.status(404).send({message: 'User is not found.'});
  }
};

exports.createUser = async (req, res) => {
  const {email, password} = req.body;
  const newClient = await new Client({email, password});

  try {
    // newUser.password = await newUser.hashedPassword(password);
    await newClient.save();
    res.status(200).send({message: newClient});
  } catch (error) {
    console.log(error);
    if (error.name === 'MongoError' && error.keyPattern.email) {
      res.status(400).send({message: 'Email is already exists.'});
    } else {
      res.status(400).send({message: error.errors.email.message});
    }
  }
};

exports.deleteUser = async (req, res) => {
  const _id = req.params.id;
  const client = await Client.findByIdAndDelete(_id);

  if (!client) {
    res
      .status(404)
      .send({message: 'The User was not deleted because it was not found.'});
  }
  res.status(200).send(client);
};

exports.updateUser = async (req, res) => {
  const {firstname, lastname, address} = req.body;
  const clinetUpdated = await Client.findByIdAndUpdate(req.params.id, {
    firstname,
    lastname,
    address,
  });

  res.send({message: clinetUpdated});
};
