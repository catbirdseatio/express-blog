import express from "express";
import * as dotenv from 'dotenv' 
import { get_posts } from "./markdown.js";

dotenv.config();
const posts = get_posts();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use('/static',express.static('static'));


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
