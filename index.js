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
app.get("/", (req, res) => {
    res.send("API is working. Try /api/tasks");
});
app.use('/api', indexRoutes);
app.use('/api', tasksRoutes);

//routes not found
app.use((req, res, next) => {
    res.status(404).json({message: 'Route not found'});
}); 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

