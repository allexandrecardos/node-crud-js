//tutorial.service.js
import { prisma } from '../prisma/prisma';

export default class TutorialService {

    async getAll() {
        try {
            const tutoriais = await prisma.tutorial.findMany();
            return tutoriais;
        } catch (error) {
            throw error;
        }
    }

    async getOne(tutorialId: string) {
        try {
            const tutoriais = await prisma.tutorial.findUnique(
                {
                    where: { id: parseInt(tutorialId) }
                }
            )
            return tutoriais;
        } catch (error) {
            throw error;
        }
    }

    async create(tutorialData: any) {
        try {

            const tutorial = await prisma.tutorial.create(tutorialData)
            return tutorial;
        } catch (error) {
            throw error;
        }
    }

    async update(tutorialId: string, tutorialData: any) {
        try {
            await prisma.tutorial.update({
                where: { id: parseInt(tutorialId) },
                data: tutorialData
            })

            const tutorial = await prisma.tutorial.findUnique(
                {
                    where: { id: parseInt(tutorialId) }
                }
            );
            return tutorial;
        } catch (error) {
            throw error;
        }
    }

    async delete(tutorialId: string) {
        try {
            const tutorial = await prisma.tutorial.delete({
                where: { id: parseInt(tutorialId) }
            })

            if (tutorial) {
                return { message: 'Deletado com sucesso.' };
            }

            return { message: 'Erro ao deletar.' };;
        } catch (error) {
            throw error;
        }
    }

}