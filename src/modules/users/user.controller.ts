import { Request, Response } from "express";
import { UserServices } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserController = {
  insertIntoDB,
};
