"use client";

import { useState } from "react";
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

function Dashboard() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());
  console.log(completedIds);
  // ── Progress stats (always based on ALL posts, not the filtered view) ──
  const totalCount = posts.length;
  const completedCount = completedIds.size;
  const remainingCount = totalCount - completedCount;
  const progressPct =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const progressCard = [
    { title: "Completed", value: completedCount },
    { title: "Remaining", value: remainingCount },
    { title: "Progress", value: `${progressPct}%` },
  ];

  // ── Toggle a single problem's completion ──
  function toggleComplete(id: number) {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  // ── Category filter ──
  const allCategories = Array.from(new Set(posts.map((p) => p.category)));

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const Foundation = filteredPosts.filter((p) => p.level === "easy");
  const Intermediate = filteredPosts.filter((p) => p.level === "mid");
  const Advance = filteredPosts.filter((p) => p.level === "hard");

  // ── Reusable problem card ──
  function ProblemCard({ post }: { post: Post }) {
    const isChecked = completedIds.has(post.id);
    return (
      <Card
        key={post.id}
        className={`p-4 flex flex-row items-center gap-3 bg-ring dark w-full transition-opacity ${
          isChecked ? "opacity-50" : "opacity-100"
        }`}
      >
        <Checkbox
          checked={isChecked}
          onCheckedChange={() => toggleComplete(post.id)}
        />
        <span className={isChecked ? "line-through text-muted-foreground" : ""}>
          {post.text}
        </span>
      </Card>
    );
  }

  return (
    <div className="dark p-4 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">JS Problem Tracker</h1>
        <p>
          60 problems to take you from beginner to proficient. Check off as you
          go.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Button
          className={
            activeCategory === "all"
              ? "bg-primary text-primary-foreground"
              : "dark"
          }
          onClick={() => setActiveCategory("all")}
        >
          All
        </Button>
        {allCategories.map((cat) => (
          <Button
            key={cat}
            className={
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "dark"
            }
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-3 gap-6">
        {progressCard.map((card) => (
          <Card className="bg-ring dark" key={card.title}>
            <CardHeader className="text-lg text-muted-foreground">
              {card.title}
            </CardHeader>
            <CardHeader className="text-3xl font-bold">{card.value}</CardHeader>
          </Card>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-3">
        <div
          className="bg-primary h-3 rounded-full transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Problem Lists */}
      <ul className="flex flex-col gap-4">
        {Foundation.length > 0 && (
          <>
            <p className="font-semibold text-lg">Level-1 Foundations</p>
            {Foundation.map((post) => (
              <ProblemCard key={post.id} post={post} />
            ))}
          </>
        )}

        {Intermediate.length > 0 && (
          <>
            <p className="font-semibold text-lg">Level-2 Intermediate</p>
            {Intermediate.map((post) => (
              <ProblemCard key={post.id} post={post} />
            ))}
          </>
        )}

        {Advance.length > 0 && (
          <>
            <p className="font-semibold text-lg">Level-3 Advance</p>
            {Advance.map((post) => (
              <ProblemCard key={post.id} post={post} />
            ))}
          </>
        )}

        {filteredPosts.length === 0 && (
          <p className="text-muted-foreground text-center">
            No problems in this category.
          </p>
        )}
      </ul>
    </div>
  );
}

export default Dashboard;
