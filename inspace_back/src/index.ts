import express, { Application, Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./middleware/db";
import * as dotenv from "dotenv";
import admin_route from "./routes/creator/users";
import stat_route from "./routes/creator/stats";
import block_route from "./routes/creator/blocks";
import cus_services from "./routes/consumer/services";
import newStat from "./middleware/newStat";

dotenv.config();
const app: Application = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/archive", express.static(__dirname + "/archive"));

app.get("/", (req: Request, res: Response) => res.send("no hack plz"));

app.use("/users", admin_route);
app.use("/stats", stat_route);
app.use("/blocks", block_route);
app.use("/reserve", cus_services);

const PORT = process.env.PORT || 1488;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));

const StatChecker = async () => {
  await newStat();
  setTimeout(StatChecker, 1000 * 60 * 10);
};
StatChecker();
