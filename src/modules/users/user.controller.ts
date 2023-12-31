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
    res.send(err);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.insertOrUpdateProfile(req.body);

    res.send({
      success: true,
      message: "User bio update successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUsers();

    res.send({
      success: true,
      message: "get all user successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getSingleUser(parseInt(req.params.id));

    res.send({
      success: true,
      message: "get Single user successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsers,
  getSingleUser,
};
