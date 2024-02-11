const Tutorial = require('../models/tutorial.model');

async function deleteTutorial() {
  try {
    const tutoriail = await Tutorial.findByPk(3);
    if (tutoriail) {
      await tutoriail.destroy();
      console.log('Tutorial deletado:', tutoriail.toJSON());
    } else {
      console.log('Tutorial não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao deletar o tutorial:', error);
  }
}

deleteTutorial();