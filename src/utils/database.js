import { createConnection } from 'mysql';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from "../config.js";

let connection;
if (USE_DB) {
    connection = createConnection({
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
        password: DB_PASSWORD
    });
}

export { connection }