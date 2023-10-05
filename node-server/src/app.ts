import express, { Express} from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import 'dotenv/config';
import './db';


// --------------
const app: Express = express();
const port: number = 3000;

app.use(express.json());
app.use(cors({ origin: true, credentials: true}));
app.use(morgan("common"));
app.use(cookieParser());

// Routers


app.listen(port, () => {
    console.log("[Server]: Node server running on port:5000");
})
