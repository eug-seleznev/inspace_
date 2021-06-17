import * as dotenv from "dotenv";
import User from "../models/User";
// import Stat from "../models/Stat";
dotenv.config();

export = async (USER_ID: string, updateInfo: object) => {
  try {

    const d = new Date();
    const huy = {
      day: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
    };
    console.log(huy)
    const user = await User.findOneAndUpdate(
      {
        _id: USER_ID,
        "stats.day": huy.day,
        "stats.month": huy.month,
        "stats.year": huy.year,
      },
      updateInfo
    )
    console.log(user);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
