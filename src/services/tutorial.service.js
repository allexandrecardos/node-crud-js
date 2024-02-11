//tutorial.service.js
const Tutorial = require("../models/tutorial.model");
const tutorialValidator =  require("../validators/tutorial.validator");

class TutorialService{
    
    async getAll(){
        try {
            const tutoriais = await Tutorial.findAll()
            return tutoriais;
        } catch (error) {
            throw error;
        }
    }

    async getOne(tutorialId){
        try {
            const tutoriais = await Tutorial.findByPk(tutorialId)
            return tutoriais;
        } catch (error) {
            throw error;
        }
    }

    async create(tutorialData){
        try {

            try{
                tutorialValidator.validateSync(tutorialData)
            }catch(error){
                return { message: error.errors }
            }

            const tutorial = await Tutorial.create(tutorialData)
            return tutorial;
        } catch (error) {
            throw error;
        }
    }

    async update(tutorialId, tutorialData){
        try {
            await Tutorial.update(tutorialData, {
                where: { id: tutorialId }
            })
            const tutorial = await Tutorial.findByPk(tutorialId);
            return tutorial;
        } catch (error) {
            throw error;
        }
    }

    async delete(tutorialId){
        try {
            const tutorial = await Tutorial.destroy({
                where: { id: tutorialId }
            })

            if(tutorial){
                return { message: 'Deletado com sucesso.' };
            }

            return { message: 'Erro ao deletar.' };;
        } catch (error) {
            throw error;
        }
    }

}

const tutorialService =  new TutorialService()

module.exports = tutorialService