"use client";

import postsData from "@/lib/data.json";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

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

//task distributioin

function Dashboard() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [count, setCount] = useState(0);

  const uniqueCategories = Array.from(
    new Set(posts.map((post) => post.category)),
  );

  {
    /* filter CATEGORY BASED */
  }

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const Foundation = filteredPosts.filter((post) => post.level === "easy");
  const Intermidiate = filteredPosts.filter((post) => post.level === "mid");
  const Advance = filteredPosts.filter((post) => post.level === "hard");
  return (
    <div className="dark p-4">
      <div className=" ">
        <h1 className="text-3xl font-bold">JS Problem Tracker</h1>
        <p>
          60 problems to take you from beginner to proficient. Check off as you
          go.
        </p>
      </div>

      {/* filter menu */}

      <div className="flex justify-center gap-4">
        <Button
          className="dark text-xl p-4"
          onClick={() => setActiveCategory("all")}
        >
          All
        </Button>

        {uniqueCategories.map((cats) => (
          <Button
            className="dark text-xl p-4"
            key={cats}
            onClick={() => setActiveCategory(cats)}
          >
            {cats}
          </Button>
        ))}
      </div>

      {/* progressbar */}

      <div className="grid grid-cols-3 gap-6  text-2xl">
        {progressCard.map((card) => (
          <Card className="bg-ring dark" key={card.id}>
            <CardHeader className="text-2xl">{card.title}</CardHeader>
            <CardHeader className="text-2xl">{count}</CardHeader>
          </Card>
        ))}
      </div>

      {/* Problems */}

      <ul className="flex flex-col gap-4 justify-center items-center">
        <p>Level-1 Foundations</p>
        {Foundation.map((post) => (
          <Card
            className=" p-4 flex-row items-center bg-ring dark w-full"
            key={post.id}
          >
            <Checkbox onClick={() => setCount(+4)} />
            console.log(count);
            {post.text}
          </Card>
        ))}

        <p>Level-2 Intermediate</p>
        {Intermidiate.map((post) => (
          <Card
            className=" p-4 flex-row items-center bg-ring dark w-full"
            key={post.id}
          >
            <Checkbox />
            {post.text}
          </Card>
        ))}

        <p>Level-3 Advance</p>
        {Advance.map((post) => (
          <Card
            className=" p-4 flex-row items-center bg-ring dark w-full"
            key={post.id}
          >
            <Checkbox />
            {post.text}
          </Card>
        ))}
      </ul>
    </div>
  );
}
export default Dashboard;
