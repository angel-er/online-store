const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const Product = require('../models/Product');
const {fields} = require('../middlewares/multer');

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

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm({
    multiples: true,
    keepExtensions: true,
  });

  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({error: 'Image could not be upload.'});
    }

    const {name, price, quantity, category} = fields;

    let images = [];
    let product = new Product({
      name,
      price,
      quantity,
      idCategory: category,
    });

    if (files.image) {
      if (files.image > 1000000) {
        return res
          .status(400)
          .json({error: 'Image should be less than 1MB in size'});
      }
      files.image.forEach((image) => {
        console.log(image.path);
        images.push({
          data: fs.readFileSync(image.path),
          contetType: image.type,
        });
      });
    }

    product.image = images;
    await product.save((err, result) => {
      if (err) {
        return res.status(400).json({error: 'Error al crear un producto'});
      }
      res.send(result);
    });
  });
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
