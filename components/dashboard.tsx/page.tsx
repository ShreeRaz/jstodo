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
    <div>
      <div className="p-4 ">
        <h1 className="text-3xl font-bold">JS Problem Tracker</h1>
        <p>
          60 problems to take you from beginner to proficient. Check off as you
          go.
        </p>
      </div>

      {/* filter */}
      <div></div>

      {/* progressbar */}

      <div></div>

      <ul className="flex flex-col gap-4 justify-center items-center">
        {posts.map((post) => (
          <li key={post.id}>{post.text}</li>
        ))}
      </ul>
    </div>
  );
}
