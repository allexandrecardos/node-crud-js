// tutorial.controller.js
import TutorialService from "../services/tutorial-service";

const tutorialService = new TutorialService();

import { Response, Request } from "express";
export default class TutorialController {

    async getAllTutorial(req: Request, res: Response) {
        try {
            const tutorial = await tutorialService.getAll();
            res.status(200).json(tutorial);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }

    async getTutorialById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const tutorial = await tutorialService.getOne(id);
            res.status(200).json(tutorial);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }

    async createTutorial(req: Request, res: Response) {
        try {
            // const tutorialData = tutorialValidator.isValidSync(req.body)
            // if (!tutorialData) {
            //     res.status(400).json({ message: "Requisição inválida" })
            // }

            const tutorial = await tutorialService.create(req.body);
            res.status(201).json({ tutorial: tutorial });
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }

    async updateTutorial(req: Request, res: Response) {
        try {
            // const tutorialData = tutorialValidator.isValidSync(req.body)
            // if (!tutorialData) {
            //     res.status(400).json({ message: "Requisição inválida" })
            // }
            const id = req.params.id;
            const tutorial = await tutorialService.update(id, req.body);
            res.status(200).json(tutorial);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }

    async deleteTutorial(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const tutorial = await tutorialService.delete(id);
            res.status(200).json(tutorial);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." })
        }
    }
}