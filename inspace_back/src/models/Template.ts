import { model, Schema, Model, Document, ObjectId } from "mongoose";
import { IBlock } from "./Block";
import { Template } from "../../../shared/types";

export interface ITemplate extends Document, Template {
  blocks: IBlock["_id"];
}

const TemplateSchema = new Schema({
  header: {
    type: String,
  },
  title: {
    type: String,
  },
  blocks: [{
    type: Schema.Types.ObjectId,
    ref: "block",
  }],
});

export default model<ITemplate>("template", TemplateSchema);
