import { Response, Request, Router } from "express";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import stats from "../../middleware/stats";
import auth from "../../middleware/auth";
import User, { IUser } from "../../models/User";
import services from "../../middleware/templates/blocks/services";
import Template, { ITemplate } from "../../models/Template";
import Block, { IBlock } from "../../models/Block";

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
        });
        const newBlockId = services();
        doc.template.block.push(newBlockId);
        await doc.template.save();
        const block = await Block.findOne({ _id: newBlockId });
        res.json(block.services);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

// add service to block
router.post("/services/add/:id", auth, async (req: Request, res: Response) => {
  try {
    await Block.findOne(
      { _id: req.params.id },
      async (err: Error, doc: IBlock) => {
        if (err) throw err;
        if (!doc) {
          return res.status(404).json({ err: "huy" });
        }
        doc.services.push({});
        await doc.save();
        res.json(doc.services);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

// edit service
router.put(
  "/services/edit/service/:id",
  auth,
  async (req: Request, res: Response) => {
    try {
      await Block.findOne(
        { "services._id": req.params.id },
        async (err: Error, doc: IBlock) => {
          if (err) throw err;
          if (!doc) {
            return res.status(404).json({ err: "huy" });
          }
          const keys: string[] = Object.keys(req.body);
          const service = doc.services.filter(
            (el) => el._id === req.params.id
          )[0];
          for (const key of keys) {
            service[key] = req.body[key];
          }
          await doc.save();
          res.json(doc.services);
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ err: "server error" });
    }
  }
);

// add item to service's list
router.put(
  "/services/list/additem/:id",
  auth,
  async (req: Request, res: Response) => {
    try {
      await Block.findOne(
        { "services._id": req.params.id },
        async (err: Error, doc: IBlock) => {
          if (err) throw err;
          if (!doc) {
            return res.status(404).json({ err: "huy" });
          }
          const service = doc.services.filter(
            (el) => el._id === req.params.id
          )[0];
          service.list.push({});
          await doc.save();
          res.json(doc.services);
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ err: "server error" });
    }
  }
);

// edit service's list's item
router.put(
  "/services/list/edit/:id",
  auth,
  async (req: Request, res: Response) => {
    try {
      const block = await Block.findOneAndUpdate(
        { "services.list._id": req.params.id },
        { $set: req.body }
      );
      res.json(block.services);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ err: "server error" });
    }
  }
);
export default router;
