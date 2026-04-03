"use client";

import postsData from "@/lib/data.json";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

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

const Foundation = posts.filter((post) => post.level === "easy");
const Intermidiate = posts.filter((post) => post.level === "mid");
const Advance = posts.filter((post) => post.level === "hard");

function Dashboard() {
  const allCategories = posts.map((post) => post.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  return (
    <div className="dark p-4">
      <div className=" ">
        <h1 className="text-3xl font-bold">JS Problem Tracker</h1>
        <p>
          60 problems to take you from beginner to proficient. Check off as you
          go.
        </p>
      </div>

      {/* filter */}
      <div>
        {uniqueCategories.map((cats) => (
          <Button className="dark" key={cats}>
            {cats}
          </Button>
        ))}
      </div>

      {/* progressbar */}

      <div className="grid grid-cols-3 gap-6  text-2xl">
        {progressCard.map((card) => (
          <Card className="bg-ring dark" key={card.id}>
            <CardHeader className="text-2xl">{card.title}</CardHeader>
            <CardHeader className="text-2xl">0</CardHeader>
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
            <Checkbox />
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
