const {Router} = require('express');
const router = Router();

const {UsersCotroller} = require('../controllers');

module.exports = (() => {
  router.get('/', UsersCotroller.getUsers);
  router.get('/:id', UsersCotroller.getUser);
  router.post('/', UsersCotroller.postUser);
  router.delete('/:id', UsersCotroller.deleteUser);
  router.put('/:id', UsersCotroller.updateUser);

  return router;
})();
