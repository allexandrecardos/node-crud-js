// tutorial.controller.js
const tutorialService = require("../services/tutorial.service");
const tutorialValidator = require("../validators/tutorial.validator");

class TutorialController {

    async getAllTutorial(req, res) {
        try {
            const tutorial = await tutorialService.getAll();
            res.status(200).json(tutorial);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }

    async getTutorialById(req, res) {
        try {
            const id = req.params.id;
            const tutorial = await tutorialService.getOne(id);
            res.status(200).json(tutorial);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }

    async createTutorial(req, res) {
        try {
            const tutorialData = tutorialValidator.isValidSync(req.body)
            if (!tutorialData) {
                res.status(400).json({ message: "Requisição inválida" })
            }

            const tutorial = await tutorialService.create(req.body);
            res.status(201).json({ tutorial: tutorial });
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }

    async updateTutorial(req, res) {
        try {
            const tutorialData = tutorialValidator.isValidSync(req.body)
            if (!tutorialData) {
                res.status(400).json({ message: "Requisição inválida" })
            }
            const id = req.params.id;
            const tutorial = await tutorialService.update(id, tutorialData);
            res.status(200).json(tutorial);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }

    async deleteTutorial(req, res) {
        try {
            const id = req.params.id;
            const tutorial = await tutorialService.delete(id);
            res.status(200).json(tutorial);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }
}

const tutorialController = new TutorialController()

module.exports = tutorialController;
