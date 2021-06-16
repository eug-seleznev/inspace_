import { Response, Request, Router } from "express";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../../models/User";
import auth from "../../middleware/auth";
import photo from "../../middleware/templates/photo";

const router = Router();

// register user
router.post("/register", async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const password = await bcrypt.hash(req.body.password, salt);
    const user: IUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      fullname: req.body.lastname + " " + req.body.firstname,
      email: req.body.email,
      phone: req.body.phone,
      password,
    });
    await user.save();

    const payload = { user: { _id: user._id } };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: 60 * 60 * 24 * 30 },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          id: user._id,
          msg: "Новый пользователь зарегестрирован",
        });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

// authentification
router.post("/auth", async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    await User.findOne(
      { email: req.body.email },
      async (err: Error, user: IUser) => {
        if (err) throw err;
        if (!user) {
          return res.status(400).json({
            errors: [{ err: "Пользователь с указанным email не найден" }],
          });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ errors: [{ err: "Неверный пароль" }] });
        }

        const payload = {
          user: {
            _id: user._id,
          },
        };
        jwt.sign(
          payload,
          process.env.jwtSecret,
          { expiresIn: 60 * 60 * 24 * 30 },
          (newError, token) => {
            if (newError) throw newError;
            res.json({ token });
          }
        );
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ err: "server error" });
  }
});

// generate invite
router.post("/invite/generate", async (res: Response) => {
  try {
    const user: IUser = new User({});
    await user.save();
    res.json({ msg: "Ссылка сгенерирована", id: user._id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

// link registration step 2
router.get("/invite/register/:id", async (req: Request, res: Response) => {
  try {
    await User.find({ _id: req.params.id }, (err: Error, doc: IUser) => {
      if (err) throw err;
      if (!doc || doc.activated) {
        return res.status(404).json({ err: "Ссылка неверная", status: false });
      }
      res.status(200).json({ status: true });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

// link registration step 3
router.post("/invite/register/:id", async (req: Request, res: Response) => {
  try {
    await User.findOne(
      { _id: req.params.id },
      async (err: Error, doc: IUser) => {
        if (err) throw err;
        if (!doc || doc.activated) {
          return res.status(404).json({ err: "Ссылка неверная" });
        }
        const salt = await bcrypt.genSalt(12);
        doc.username = req.body.username;
        doc.email = req.body.email;
        doc.phone = req.body.phone;
        doc.password = await bcrypt.hash(req.body.password, salt);
        doc.firstname = req.body.firstname ? req.body.firstname : undefined;
        doc.lastname = req.body.lastname ? req.body.lastname : undefined;
        doc.fullname =
          req.body.lastname && req.body.firstname
            ? req.body.lastname + " " + req.body.firstname
            : undefined;
        doc.activated = true;
        switch (req.body.template) {
          case "photo":
            doc.template = await photo(req.body.username, req.body.email);
            break;
          case "b":
            break;
          case "c":
            break;
          case "d":
            break;
          default:
            break;
        }
        await doc.save();
        await User.populate(doc, {
          path: "template",
          populate: { path: "blocks" },
        });
        res.json(doc);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

// user edit
router.put("/user/me/edit", auth, async (req: Request, res: Response) => {
  try {
    await User.findOne({ _id: req.user._id }, (err: Error, doc: IUser) => {
      if (err) throw err;
      if (!doc) {
        return res.status(404).json({ err: "Документ не найден" });
      }
      const keys: string[] = Object.keys(req.body);
      for (const key of keys) {
        doc[key] = req.body[key];
      }
      doc.save().then((newDoc) => res.json(newDoc));
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

// get user's template
router.get("/template/get", auth, async (req: Request, res: Response) => {
  try {
    await User.findOne(
      { _id: req.user._id },
      async (err: Error, doc: IUser) => {
        if (err) throw err;
        if (!doc) {
          return res.status(404).json({ err: "Пользователь не найден" });
        }
        await User.populate(doc, {
          path: "template",
          populate: { path: "blocks" },
        });
        return res.json(doc.template);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

// get self
router.get("/user/me/get", auth, async (req: Request, res: Response) => {
  try {
    await User.findOne(
      { _id: req.user._id },
      async (err: Error, doc: IUser) => {
        if (err) throw err;
        if (!doc) {
          return res.status(404).json({ err: "Пользователь не найден" });
        }
        await User.populate(doc, {
          path: "template",
          populate: { path: "blocks" },
        });
        return res.json(doc);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "server error" });
  }
});

export default router;
