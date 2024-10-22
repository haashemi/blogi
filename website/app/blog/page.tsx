import { blogs } from "@/app/_api/blogs";

import { BlogCard } from "../_components/blog-card";

export default async function BlogsPage({ searchParams: { page } }: { searchParams: { page?: string } }) {
  const data = await blogs(page);

  return (
    <main className="px-3">
      <div className="flex flex-col gap-3">
        {data.posts.map((v) => (
          <BlogCard
            authorName={v.authorName}
            id={v.id}
            key={v.id}
            publishedAt={v.publishedAt}
            summary={v.summary}
            title={v.title}
          />
        ))}
      </div>
    </main>
  );
}
