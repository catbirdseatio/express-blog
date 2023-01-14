import express from "express";
import { get_posts } from "../markdown.js";

export const router = express.Router();

router.get("/", (req, res) => {
  const posts = get_posts().map((post) => {
    const { title, slug } = post;
    return { title, slug };
  });
  res.render("pages/index", { posts });
});

router.get("/posts/:slug", (req, res) => {
  const post = get_posts().find((post) => post.slug === req.params.slug);
  res.render("pages/post", { post });
});


export default {
  posts: router,
};
