import { model, Schema, Model, Document, ObjectId } from "mongoose";
import { Stat } from "../../../shared/types";
import { IUser } from "./User";
// import { StatUser } from "../../../shared/types";

// interface IStatUser extends Document, StatUser {
//   user: IUser["_id"];
// }
// export interface IStat extends Document, Stat {
//   users: [IStatUser];
// }

// const StatSchema = new Schema({
//   date: { type: Date },
//   day: {
//     type: Number,
//   },
//   month: {
//     type: Number,
//   },
//   year: {
//     type: Number,
//   },
//   users: [
//     {
//       user: { type: Schema.Types.ObjectId, ref: "user" },
//       stats: [
//         {
//           name: String,
//           count: { type: Number, default: 0 },
//         },
//       ],
//       visits: Number,
//     },
//   ],
// });

// export default model<IStat>("stat", StatSchema);
