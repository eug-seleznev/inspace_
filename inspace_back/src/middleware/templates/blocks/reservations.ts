import reservation_loop from "../../reservation_loop";
import Block, { IBlock } from "../../../models/Block";

export = async () => {
  try {
    const date: Date = new Date();
    const block: IBlock = new Block({
      text: ["Я охуенный фотограф, тут можно забронировать дни"],
      block_type: "reservation",
      years: [await reservation_loop(date)],
    });
    await block.save();
    return block._id;
  } catch (error) {
    console.error(error);
    return { err: "server error" };
  }
};
