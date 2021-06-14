import Block, { IBlock } from "../../../models/Block";

export = async (email: string) => {
  try {
    const block: IBlock = new Block({
      text: ["Я охуенный фотограф, вот мои контакты"],
      block_type: "contacts",
      links: [{ text: "Email", url: email }],
    });
    await block.save();
    return block._id;
  } catch (error) {
    console.error(error);
    return { err: "server error" };
  }
};
