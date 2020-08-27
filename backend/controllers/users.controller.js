exports.getUsers = (req, res) => {
  res.send({message: 'ALL USERS'});
};

exports.getUser = (req, res) => {
  res.send({message: 'ONE USER'});
};

exports.postUser = (req, res) => {
  res.send({message: 'User saved!'});
};

exports.deleteUser = (req, res) => {
  res.send({message: 'User Deleted!'});
};

exports.updateUser = (req, res) => {
  res.send({message: 'User Updated!'});
};
