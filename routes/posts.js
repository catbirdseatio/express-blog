import express from "express";
import { get_posts } from "../markdown.js";

export const router = express.Router();
const posts = get_posts();

router.get("/", (req, res) => {
  const index_posts = posts.map((post) => {
    const { title, slug } = post;
    return { title, slug };
  });
  res.render("pages/index", { posts: index_posts });
});

router.get("/posts/:slug", (req, res) => {
  const post = posts.find((post) => post.slug === req.params.slug);
  res.render("pages/post", { post });
});

export default {
    posts: router
}
