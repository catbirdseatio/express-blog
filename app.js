import express from "express";
import { get_posts } from "./markdown.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use('/static',express.static('static'));

const posts = get_posts();

app.get("/", (req, res) => {
  const index_posts = posts.map(post => {
    const {title, slug} = post;
    return { title, slug}
  })
  res.render('pages/index', { posts: index_posts });
});

app.get('/posts/:slug', (req,res)=>{
    const post = posts.find(post => post.slug === req.params.slug);
    res.render('pages/post', { post })
});

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
