const router = require("express").Router();
const incidentController = require("../../controllers/incidentsController");

// Matches with "/api/incidents"
router.route("/")
  .get(incidentController.findAll)
  .post(incidentController.create);
  

// Matches with "/api/incidents/:id"
router
  .route("/:id")
  .get(incidentController.groupByUser)
  .get(incidentController.findById)
  .put(incidentController.update)
  .delete(incidentController.remove);

module.exports = router;
