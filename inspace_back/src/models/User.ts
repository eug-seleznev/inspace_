import { model, Schema, Model, Document, ObjectId } from "mongoose";
import { ITemplate } from "./Template";
import { User } from "../../../shared/types";
export interface IUser extends Document, User {
  _id?: string;
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
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
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
  stats: [
    {
      date: { type: Date },
      date_locale: { type: String },
      day: {
        type: Number,
      },
      month: {
        type: Number,
      },
      year: {
        type: Number,
      },
      visits: {
        type: Number,
        default: 0,
      },
    },
  ],
});

export default model<IUser>("user", UserSchema);
