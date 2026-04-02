"use client";

import postsData from "@/lib/data.json";
import { Button } from "@/components/ui/button";

type Post = {
  id: number;
  text: string;
  category: string;
  level: string;
};

const posts = postsData as Post[];

function Dashboard() {
  const allCategories = posts.map((post) => post.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  return (
    <div className="dark">
      <div className="p-4 ">
        <h1 className="text-3xl font-bold">JS Problem Tracker</h1>
        <p>
          60 problems to take you from beginner to proficient. Check off as you
          go.
        </p>
      </div>

      {/* filter */}
      <div>
        {uniqueCategories.map((cats) => (
          <Button key={cats}>{cats}</Button>
        ))}
      </div>

      {/* progressbar */}

      <div></div>

      {/* Problems */}

      <ul className="flex flex-col gap-4 justify-center items-center">
        {posts.map((post) => (
          <li key={post.id}>{post.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default Dashboard;
