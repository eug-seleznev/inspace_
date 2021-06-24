import * as dotenv from "dotenv";
import User from "../models/User";
// import Stat from "../models/Stat";
dotenv.config();

export = async (USER_ID: string, updateInfo: object) => {
  try {
    const d = new Date();
    await User.findOneAndUpdate(
      {
        _id: USER_ID,
        "stats.date_locale": d.toLocaleDateString(),
      },
      updateInfo,
      { new: true }
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
