import * as dotenv from "dotenv";
import User, { IUser } from "../models/User";
dotenv.config();

export = async () => {
  try {
    const d = new Date();
    const huy = {
      date: d,
      date_locale: d.toLocaleDateString(),
      day: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
    };
    const users = await User.find();
    for (const user of users) {
      const stat = user.stats.filter(
        (el) => el.date_locale === d.toLocaleDateString()
      );
      if (stat.length === 0) {
        user.stats.push(huy);
        await user.save();
      }
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
