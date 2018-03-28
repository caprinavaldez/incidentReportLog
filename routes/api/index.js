const router = require("express").Router();
const bookRoutes = require("./books");
const incidentsRoutes = require("./incidents");
const usersRoutes = require("./users");

// App routes
router.use("/books", bookRoutes);
router.use("/incidents", incidentsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
