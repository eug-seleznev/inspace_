import Block, { IBlock } from "../../../models/Block";

export = async () => {
  try {
    const block: IBlock = new Block({
      text: ["Отутвот услуги"],
      block_type: "services",
      services: [
        {
          title: "Услуга 1",
          text: "делаю вот это вот так вот",
          list: [{ req: true, text: "фистинг", price: 300 }],
        },
      ],
    });
    await block.save();
    return block._id;
  } catch (error) {
    console.error(error);
    return { err: "server error" };
  }
};
