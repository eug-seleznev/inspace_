import { Response, Request, Router } from "express";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import stats from "../../middleware/stats";
import auth from "../../middleware/auth";
import User, { IUser } from "../../models/User";
import services from "../../middleware/templates/blocks/services";
import Template, { ITemplate } from "../../models/Template";

const router = Router();

// add services block
router.post("/add/services", auth, async (req, res) => {
  try {
    await User.findOne(
      { _id: req.user._id },
      async (err: Error, doc: IUser) => {
        if (err) throw err;
        if (!doc) {
          return res.status(404).json({ err: "huy" });
        }
        await User.populate(doc, {
          path: "template",
          populate: { path: "blocks" },
        });
        doc.template.block.push(services());
        await doc.template.save();
        res.json(doc.template);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

//add service to block
router.post("/services/add/:id", auth, async (req: Request, res: Response) => {
  try {
    await Template.findOne(
      { blocks: req.params.id },
      (err: Error, doc: ITemplate) => {
        if (err) throw err;
        if (!doc) {
          return res.status(404).json({ err: "huy" });
        }
        
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

export default router;
