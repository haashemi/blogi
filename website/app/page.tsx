import Link from "next/link";

import { blogs } from "./_api/blogs";
import { BlogCard } from "./_components/blog-card";

export default async function Home() {
  const data = await blogs("1");

  return (
    <main className="flex flex-1 flex-col gap-10 px-3">
      <div className="flex flex-col items-center gap-2 pb-6 pt-16">
        <h1 className="text-6xl font-black">بلاگی</h1>
        <p className="w-full min-w-0 max-w-64 text-pretty text-center font-light text-zinc-500">
          جایی برای نوشتن در مورد هر چیزی که به ذهنت خلاق نویسنده‌ها می‌رسه
        </p>

        <Link className="mt-5 bg-black px-4 py-2 text-white" href="/profile">
          بریم بنویسیم
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-center text-lg font-bold">آخرین بلاگ‌ها</h3>

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
      </div>
    </main>
  );
}
