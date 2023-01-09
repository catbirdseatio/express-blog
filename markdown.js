import matter from "gray-matter";
import { marked } from "marked";
import fg from "fast-glob";
import fs from "fs";
import path from "path";

const marked_options = {
  headerIds: false,
  breaks: true,
};

const base_path = path.join(path.resolve("."));
const filenames = fg.sync(base_path + "/posts/**/*.md");

const readFile = (filename) => {
  const rawFile = fs.readFileSync(filename, "utf-8");
  const parsed = matter(rawFile);
  const html = marked(parsed.content);

  return { ...parsed.data, content: html };
};

export const get_posts = () => {
  return filenames.map((filename) => readFile(filename));
};


export default {
    get_posts
}