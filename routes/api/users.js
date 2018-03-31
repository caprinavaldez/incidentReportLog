const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/counts-by-category"
router
  .route("/counts-by-category")
  .get(usersController.groupByCategory);

// Matches with "/api/users/counts-by-industry"
router
  .route("/counts-by-industry")
  .get(usersController.groupByIndustry);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;