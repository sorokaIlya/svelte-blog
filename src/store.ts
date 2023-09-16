import { get, writable } from "svelte/store";
import type { Post } from "./types/post.type";
type PostState = { posts: Post[] };

const intialData: PostState = {
  posts: [
    {
      id: "1",
      createdAt: "Sat Sep 16 2023",
      title: "Post title #1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima culpa voluptas, magni incidunt reprehenderit ad mollitia eligendi quos ipsum, a cumque ipsa, quam fugiat nihil. Obcaecati aperiam magni ducimus.",
    },
    {
      id: "2",
      createdAt: "Sat Sep 17 2023",
      title: "Post title #2",
      updatedAt: "Sat Sep 17 2023",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima culpa voluptas, magni incidunt reprehenderit ad mollitia eligendi quos ipsum, a cumque ipsa, quam fugiat nihil. Obcaecati aperiam magni ducimus.",
    },
  ],
};

const postsFromStorage = localStorage.getItem("state");
const appState = postsFromStorage ? JSON.parse(postsFromStorage) : intialData;

export const postsState = writable<PostState>(appState);

export const createPost = (post: Post) => {
  postsState.update((prev) => ({ posts: [...prev.posts, post] }));
  localStorage.setItem("state", JSON.stringify(get(postsState)));
};

export const updatePost = (post: Post) => {
  postsState.update((prev) => ({
    posts: [...prev.posts.filter((item) => item.id !== post.id), post],
  }));
  localStorage.setItem("state", JSON.stringify(get(postsState)));
};

export const getPostById = (postId: string) => {
  const post = get(postsState).posts.find((item) => item.id === postId);
  return post;
};
