const yup = require('yup');

const tutorialValidator = yup.object().shape({
    title: yup.string().required('Título é obrigatório.'),
    description: yup.string().required('Descrição é obrigatório.'),
});

module.exports =  tutorialValidator