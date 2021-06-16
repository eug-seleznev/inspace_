import * as dotenv from "dotenv";
import User, { IUser } from "../models/User";
dotenv.config();

export = async () => {
  try {
    const d = new Date();
    const huy = {
      date: d,
      day: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
    };
    const users = await User.find();
    for (const user of users) {
      const stat = user.stats.filter((el) => {
        return (
          el.day === huy.day && el.month === huy.month && el.year === huy.year
        );
      });
      if (stat.length === 0) {
        user.stats.push(huy);
        await user.save();
      }
    }
    // return stat._id;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
