const Category = require('../models/Category');

exports.allCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createCategory = async (req, res) => {
  const name = req.body.name.toLowerCase();
  const newCategory = await new Category({name});

  try {
    await newCategory.save();

    res.status(200).send(newCategory);
  } catch (error) {
    console.log(error);
    res.status(404).send({error: 'La categoria ya existe.'});
  }
};

exports.deleteCategory = async (req, res) => {
  const _id = req.params.id;
  const categoryDeleted = await Category.findByIdAndDelete(_id);

  if (!categoryDeleted) {
    res
      .status(404)
      .send({message: 'Category was not deleted beacause it was not found.'});
  }
  res.status(200).send(categoryDeleted);
};
