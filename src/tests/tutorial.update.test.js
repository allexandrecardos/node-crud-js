const Tutorial = require('../models/tutorial.model');

async function updateTutorial() {
  try {
    const tutoriail = await Tutorial.findByPk(1);
    if (tutoriail) {
      tutoriail.title = 'Teste Update';
      await tutoriail.save();
      console.log('Tutorial atualizado:', tutoriail.toJSON());
    } else {
      console.log('Tutorial não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao atualizar:', error);
  }
}

updateTutorial();