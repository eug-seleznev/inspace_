import Block, { IBlock } from "../../../models/Block";

export = async () => {
  try {
    const block: IBlock = new Block({
      text: ["Я охуенный фотограф, вот мои фотки"],
      block_type: "header",
      links: [
        {
          text: "фотка-плейсхолдер",
          url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FComeOnCollegeBoi%2Fphotos%2F&psig=AOvVaw214Kq7dhr1QT7nD9TqGfJq&ust=1623340083456000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiL5ZzzivECFQAAAAAdAAAAABAD",
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
