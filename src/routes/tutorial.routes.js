const express = require("express");
const router = express.Router();

const tutorialController = require("../controllers/tutorial.controller");

router.get("/", tutorialController.getAllTutorial);
router.get("/:id", tutorialController.getTutorialById);
router.post("/", tutorialController.createTutorial);
router.put("/:id", tutorialController.updateTutorial);
router.delete("/:id", tutorialController.deleteTutorial);

module.exports = router;
