import { Router } from "express";
import { getTasks, getTask, createTask, updateTask, deleteTask, updateStateTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.patch('/tasks/:id', updateStateTask);

router.delete('/tasks/:id', deleteTask);

export default router;