"use client";

import postsData from "@/lib/data.json";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

type Post = {
  id: number;
  text: string;
  category: string;
  level: string;
};

const posts = postsData as Post[];
const progressCard = [
  { title: "Completed", id: 1 },
  { title: "Remaining", id: 2 },
  { title: "Progress", id: 3 },
];

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

      <div className="grid grid-cols-3 gap-6 p-4 text-2xl">
        {progressCard.map((card) => (
          <Card key={card.id}>
            <CardHeader className="text-2xl">{card.title}</CardHeader>
            <CardHeader className="text-2xl">0</CardHeader>
          </Card>
        ))}
      </div>

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
