const Product = require('../models/Product');

exports.allProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.oneProduct = async (req, res) => {
  const _id = req.params.id;

  try {
    const product = await Product.findById(_id);
    console.log(product);
    res.send(product);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.createProduct = async (req, res) => {
  const {name, price, quantity, category} = req.body;
  const product = await new Product({
    name,
    price,
    quantity,
    idCategory: category,
  });

  try {
    await product.save();
    console.log(product);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteProduct = async (req, res) => {
  const {id} = req.params;

  const productDeleted = await Product.findByIdAndDelete(id);

  if (!productDeleted) {
    res
      .status(404)
      .send({message: 'Product was not deleted because it is not found.'});
  }

  res.send(productDeleted);
};

exports.updateProduct = async (req, res) => {
  const {name, price, quantity, category} = req.body;
  const _id = req.params.id;

  const productUpdated = await Product.findByIdAndUpdate(_id, {
    name,
    price,
    quantity,
    idCategory: category,
  });

  if (!productUpdated) {
    res.status(404).send({message: 'Product was not updated.'});
  }

  res.status(200).send(productUpdated);
};
