const router = require("express").Router();
const incidentController = require("../../controllers/incidentsController");

// Matches with "/api/incidents"
router
  .route("/")
  .post(incidentController.create)
  .get(incidentController.findAll);

router
  .route("/counts-by-category/:user_id")
  .get(incidentController.countByCategory);

router
  .route("/counts-by-industry")
  .get(incidentController.countByIndustry);

router
  .route("/avg-costs-by-category")
  .get(incidentController.averageCostByCategory);
  
router
  .route("/avg-costs-by-industry")
  .get(incidentController.averageCostByIndustry);

router
  .route("/counts-by-month")
  .get(incidentController.groupByMonth);

// Matches with "/api/incidents/:id"
router
  .route("/:id")
  .get(incidentController.findById)
  .put(incidentController.update)
  .delete(incidentController.remove);

module.exports = router;
