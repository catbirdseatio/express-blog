import express from "express";
import * as dotenv from 'dotenv';
import { router as posts } from './routes/posts.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use('/blog/static',express.static('static'));
app.use('/blog', posts);


app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
