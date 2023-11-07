import { Post } from "../../types/post.type";

export async function getAllPosts() {
  const res = await fetch("https://dummyjson.com/posts").then((res) =>
    res.json()
  );
  const posts: Post[] = res.posts;

  return posts;
}
