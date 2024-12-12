import { getBlogs } from "@/app/_api/getBlogs";
import { BlogCard } from "@/app/_components/blog-card";

interface BlogsPageProps {
  searchParams: Promise<{
    query?: string;
  }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { query } = await searchParams;
  const data = await getBlogs(query);

  return (
    <main className="px-3">
      {query && (
        <div className="flex flex-col justify-center gap-1 pb-20 pt-10">
          <h2 className="text-sm text-zinc-700">نتیجه جتسجو:</h2>
          <p className="mr-5 text-3xl font-bold">{query}</p>
        </div>
      )}
      <div className="flex flex-col gap-3">
        {data.posts.map((v, i) => (
          <BlogCard
            authorName={v.authorName}
            id={v.id}
            // TODO:
            // eslint-disable-next-line @eslint-react/no-array-index-key
            key={`${v.id}-${i}`}
            publishedAt={v.publishedAt}
            summary={v.summary}
            title={v.title}
          />
        ))}
      </div>
    </main>
  );
}
