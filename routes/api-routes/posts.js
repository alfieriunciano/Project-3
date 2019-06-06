const router = require('express').Router();
const postsController = require('../../controllers/postsController');
const userID = require('../../controllers/userController')

// Matches with "/api/books"
router
  .route('/')
  .get(postsController.findAll)
  .post(postsController.create);

router
  .route('/login')
  .post(userID.login);

router
  .route('/register')
  .post(userID.create)

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

module.exports = router;
