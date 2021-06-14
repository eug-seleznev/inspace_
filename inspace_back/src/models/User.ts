import { model, Schema, Model, Document, ObjectId } from "mongoose";
import { ITemplate } from "./Template";
import { User } from "../../../shared/types";
export interface IUser extends Document, User {
  template: ITemplate["_id"];
}

const UserSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  fullname: {
    type: String,
  },
  username: String,
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  template: {
    type: Schema.Types.ObjectId,
    ref: "template",
  },
  activated: {
    type: Boolean,
    default: false,
  },
});

export default model<IUser>("user", UserSchema);
