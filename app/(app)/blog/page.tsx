import { getBlogs } from "@/app/_api/getBlogs";
import { BlogCard } from "@/app/_components/blog-card";

interface BlogsPageProps {
  searchParams: Promise<{
    page?: string;
    query?: string;
  }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { page, query } = await searchParams;
  const data = await getBlogs(page);

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
