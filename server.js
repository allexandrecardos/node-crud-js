//import packages
require('dotenv').config();
const express = require('express');

const tutorialRoutes = require('./src/routes/tutorial.routes');

const app = express();

const PORT = process.env.PORT; 

//parse application/json
app.use(express.json());

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/tutorial', tutorialRoutes);

app.listen(PORT, () => console.log(`server running: http://localhost:${PORT}`));
