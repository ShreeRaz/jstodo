"use client";

import postsData from "@/lib/data.json";

type Post = {
  id: number;
  text: string;
  category: string;
  level: string;
};

const posts = postsData as Post[];

export default function Dashboard() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
