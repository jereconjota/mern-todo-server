import { pool } from "../db.js";

const getTasks = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM tasks ORDER BY createdAt DESC");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(title, description);
        const [newTask] = await pool.query(
            "INSERT INTO tasks (title, description) VALUES (?, ?)",
            [title, description]
        );
        console.log(newTask);
        res.json({
            id: newTask.insertId,
            title,
            description,
            done: false
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        console.log(req.body);
        const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
        if (rows.length > 0) {
            const [updatedTask] = await pool.query(
                "UPDATE tasks SET title = ?, description = ? WHERE id = ?",
                [title, description, id]
            );
            res.json({
                id,
                title,
                description
            });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateStateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { done } = req.body;
        console.log(req.body);
        const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
        if (rows.length > 0) {
            const [updatedTask] = await pool.query(
                "UPDATE tasks SET done = ? WHERE id = ?",
                [done, id]
            );
            res.json({
                id,
                done
            });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
        if (rows.length > 0) {
            const [deletedTask] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
            res.status(204).json({ message: "Task deleted" });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export { getTasks, getTask, createTask, updateTask, deleteTask, updateStateTask };