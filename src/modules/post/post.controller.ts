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

const getSinglePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  // const data = req.body;
  try {
    const result = await PostService.getSinglePost(id);

    res.send({
      success: true,
      message: "Get Single Post successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const updatePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  // const data = req.body;
  try {
    const result = await PostService.updatePost(id, req.body);

    res.send({
      success: true,
      message: "Post Updated successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await PostService.deletePost(id);

    res.send({
      success: true,
      message: "Deleted Post successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const PostController = {
  createPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
};
