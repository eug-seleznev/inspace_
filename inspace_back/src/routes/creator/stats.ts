import { Response, Request, Router } from "express";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../../models/User";
import auth from "../../middleware/auth";
import photo from "../../middleware/templates/photo";
import stats from "../../middleware/stats";

const router = Router();

// increase user count
router.get("/usercount/increase/:id",async(req,res)=>{
    try{
        const updObj={$inc:{visits:1}}
        await stats(req.params.id,updObj)
        return res.json({msg:"huy"})
    }catch(error){
      console.error(error);
      return res.status(500).json({err:"server error"});
    }
})


export default router;