import express, { Application, Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./middleware/db";
import * as dotenv from "dotenv";
import admin_route from "./routes/creator/users";

dotenv.config();
const app: Application = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/archive", express.static(__dirname + "/archive"));

app.get("/", (req: Request, res: Response) => res.send("no hack plz"));

app.use("/users", admin_route);

const PORT = process.env.PORT || 1488;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
