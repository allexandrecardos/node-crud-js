const Tutorial = require('../models/tutorial.model');

async function createTutorial() {
  try {
    const novoTutorial = await Tutorial.create({
      title: 'Como usar o Sequelize',
      description: 'Um tutorial sobre como usar o Sequelize com Node.js',
      publishedAt: 1
    });

    console.log('Tutorial criado com sucesso:', novoTutorial);
  } catch (error) {
    console.error('Erro ao criar o tutorial:', error);
  }
}

createTutorial();