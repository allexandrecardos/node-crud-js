const Tutorial = require('../models/tutorial.model');

async function getTutorial() {
  try {
    const tutoriais = await Tutorial.findAll();

    console.log(tutoriais);
  } catch (error) {
    console.error('Erro ao criar o tutorial:', error);
  }
}

getTutorial();