import jwt from "jsonwebtoken"
import { Response, Request, NextFunction } from "express";

export = (req:Request, res:Response, next:NextFunction)=> {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({ msg: "Токен не введен" });
  }

  try {
    const decoded:any = jwt.verify(token, process.env.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Неверный токен авторизации" });
  }
};
