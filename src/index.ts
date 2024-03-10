//import packages
import express from 'express'
import { server } from './config/config';
import { tutorialRoutes } from './routes/tutorial-routes';

const app = express();
const PORT = server.PORT_APP;

//parse application/json
app.use(express.json());

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/tutorial', tutorialRoutes);

app.listen(PORT, () => console.log(`server running: http://localhost:${PORT}`));
