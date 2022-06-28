import knex from "knex";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

let conn = knex({client: "better-sqlite3", 
connection: {filename: path.resolve(__dirname, "helpdesk.sqlite")}, useNullAsDefault: true}); 

export {conn};