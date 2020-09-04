const {Router} = require('express');
const router = Router();

module.exports = (() => {
  router.get('/');
  router.post('/');

  return router;
})();
