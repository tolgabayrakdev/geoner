import { Pool } from 'pg';
const connectionString: string =
  'postgresql://root:root@localhost:5432/postgres';

const pool = new Pool({
  connectionString,
});

pool.connect(function (err) {
  if (err) throw err;
  console.log('[Database]: PostgreSQL is connected.');
});

export default pool;
