import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/db", async (req, res) => {
    try {
        const connection = await pool.getConnection();
        connection.release();
        res.send("Database connection is ok");
    } catch (err) {
        console.log(err);
        res.status(500).send("There was an error connecting to the database");
    }
}); 

export default router;