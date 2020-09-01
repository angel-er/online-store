const {Router} = require('express');
const router = Router();

const {CategoriesController} = require('../controllers');

module.exports = (() => {
  router.get('/', CategoriesController.allCategories);
  router.post('/', CategoriesController.createCategory);
  router.delete('/:id', CategoriesController.deleteCategory);

  return router;
})();
