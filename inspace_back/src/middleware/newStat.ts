import * as dotenv from "dotenv";
import Stat,{IStat}  from "../models/Stat"
dotenv.config();

export = async() => {
  try {
    const d = new Date();
    let stat = await Stat.findOne({
      day: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
    });
    if (!stat) {
      stat = new Stat({
        date: d,
        day: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear(),
      });
      await stat.save();
    }
    return stat._id
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}