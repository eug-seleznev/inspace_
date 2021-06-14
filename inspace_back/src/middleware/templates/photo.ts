import Template, { ITemplate } from "../../models/Template";
import contacts from "./blocks/contacts";
import header from "./blocks/header";
import reservations from "./blocks/reservations";
export = async (username: string, email: string) => {
  try {
    const template: ITemplate = new Template({
      header: username,
      title: username,
      blocks: [await header(), await reservations(), await contacts(email)],
    });
    await template.save();
    return template._id;
  } catch (error) {
    console.error(error);
    return { err: "server error" };
  }
};
