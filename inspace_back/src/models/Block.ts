import { model, Schema, Model, Document, ObjectId } from "mongoose";
import { Block } from "../../../shared/types";

export interface IBlock extends Document, Block {}

const BlockSchema = new Schema({
  block_type: String,
  text: [String],
  list: [String],
  links: [{ text: String, url: String }],
  services: [
    {
      title: String,
      text: String,
      list: [{ text: String, price: String }],
    },
  ],
  years: [
    {
      year: Number,
      months: [
        {
          month: Number,
          days: [
            {
              date: Date,
              reservations: [
                {
                  user: { name: String, phone: String, email: String },
                  service: String,
                  timegate: { start: Number, end: Number },
                },
              ],
              events: [{ time: Date, title: String, description: String }],
            },
          ],
        },
      ],
    },
  ],
});

export default model<IBlock>("block", BlockSchema);
