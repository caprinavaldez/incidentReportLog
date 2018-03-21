const router = require("express").Router();
const bookRoutes = require("./books");
const incidentsRoutes = require("./incidents");

// Book routes
router.use("/books", bookRoutes);
router.use("/incidents", incidentsRoutes);

module.exports = router;
