const {Router} = require('express');
const router = Router();

const {ProductsController} = require('../controllers');

module.exports = (() => {
  router.get('/', ProductsController.allProducts);
  router.get('/:id', ProductsController.oneProduct);
  router.post('/', ProductsController.createProduct);
  router.delete('/:id', ProductsController.deleteProduct);
  router.put('/:id', ProductsController.updateProduct);

  return router;
})();
