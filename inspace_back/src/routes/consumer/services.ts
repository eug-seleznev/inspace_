import { Response, Request, Router } from "express";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import User, { IUser } from "../../models/User";
import Block, { IBlock } from "../../models/Block";
import { Reservations, ReserveUser } from "../../../../shared/types";
// import User from "../../models/User";

const router = Router();

// reserve day
router.put("/reserve/day/:id", async (req: Request, res: Response) => {
  try {
    const userObj: ReserveUser = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    };
    const resObj: Reservations = {
      user: userObj,
      service: req.body.service,
      timegate: { start: 0, end: 23 },
    };
    const d: Date = new Date(req.body.date);
    await Block.findOne(
      { "years.months.days._id": req.params.id },
      async (err: Error, doc: IBlock) => {
        if (err) throw err;
        if (!doc) {
          return res.status(404).json("huy");
        }
        for (const year of doc.years) {
          if (year.year === d.getFullYear()) {
            for (const month of year.months) {
              if (month.month === d.getMonth()) {
                const a = month.days.filter((el) => el._id.toString() === req.params.id.toString())[0];
                console.log(a)
                a.reservations.push(resObj);
                await doc.save();
              }
            }
          }
        }
      }
    );
    res.json("huy");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

export default router;
