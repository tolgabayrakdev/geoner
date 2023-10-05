import { Pool } from "pg";
const connectionString: string = "postgresql://root:root@localhost:5432/postgres";

const pool = new Pool({
    connectionString  
});

export default pool;