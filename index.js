import express from 'express';
import {PORT} from './config.js';
import indexRoutes from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import cors from 'cors';

//create express app
const app = express();
app.use(express.json());

//cors
app.use(cors());

//routes
app.use('/api', indexRoutes);
app.use('/api', tasksRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


