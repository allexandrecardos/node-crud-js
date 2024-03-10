import Router from "express";
import TutorialController from '../controllers/tutorial-controller';
const router = Router();

const tutorialController = new TutorialController();

router.get("/", tutorialController.getAllTutorial);
router.get("/:id", tutorialController.getTutorialById);
router.post("/", tutorialController.createTutorial);
router.put("/:id", tutorialController.updateTutorial);
router.delete("/:id", tutorialController.deleteTutorial);

export { router as tutorialRoutes };
