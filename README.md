> Status: In Development ⭕

## Melhorias

- [ ] ~~Sequelize-cli (models e migrations)~~
- [X] Prisma (models e migrations)
- [X] Docker (Mysql) [ Atualmente é PostgreSql ]
- [ ] Jest (testes automatizados)
- [ ] Finalizar documentação (README.md)
- [X] TypesScript e ESmodules

# API de CRUD de Tutoriais 📝

Esta é uma API RESTful para gerenciamento de tutoriais. Ela foi construída utilizando Node.js, Express.js para roteamento, Sequelize para ORM de banco de dados (PostgreSql), e Yup para validação de requisições. Esta API segue a arquitetura MVC (Model-View-Controller) e tem estrutura de pastas para separação de responsabilidades.

## Estrutura de Pastas
A estrutura de pastas da API é organizada da seguinte maneira:

- **controllers**: Controladores da API responsáveis por lidar com as requisições HTTP.
- ~~**models**: Modelos da aplicação que definem a estrutura dos dados no banco de dados.~~
- **repository**: Repositório da aplicação responsável por interagir com o banco de dados.
- **services**: Serviços da aplicação que contêm a lógica de negócios.
- **routes**: Rotas da API definidas utilizando o Express.js.

## Tecnologias Utilizadas

| Tecnologia  | Versão      |
|-------------|-------------|
| NodeJS      |   20.3.1    | 
| TypeScript      |   ^5.4.2   | 

## Bibliotecas Utilizadas

| Biblioteca  | Versão      |
|-------------|-------------|
| ~~Sequelize~~   |  ~~^6.36.0~~    | 
| ~~Pg~~          |  ~~^8.11.3~~    |
| ~~Yup~~         |  ~~^1.3.3~~     | 
| Express     |  ^4.18.2    | 
| Dotenv      |  ^16.4.1    | 
| Prisma          |  ^^5.10.2    |

## Funcionalidades

A API oferece operações básicas de CRUD (Create, Read, Update, Delete) para tutoriais. As principais funcionalidades são:

- Criar um novo tutorial.
- Obter uma lista de todos os tutoriais.
- Obter um tutorial específico por seu ID.
- Atualizar os detalhes de um tutorial existente.
- Excluir um tutorial existente.
