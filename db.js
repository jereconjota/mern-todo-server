import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    port: process.env.DB_PORT || 3306,
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "test"
});
