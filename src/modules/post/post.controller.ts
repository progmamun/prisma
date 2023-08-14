import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);

    res.send({
      success: true,
      message: "Post Create successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  console.log(req.query);
  const options = req.query;
  try {
    const result = await PostService.getAllPost(options);

    res.send({
      success: true,
      message: "get all post successfully!",
      total: result.total,
      data: result.data,
    });
  } catch (err) {
    res.send(err);
  }
};

export const PostController = {
  createPost,
  getAllPost,
};
