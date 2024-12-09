import { getBlogs } from "@/app/_api/getBlogs";
import { BlogCard } from "@/app/_components/blog-card";
import { Input } from "@/app/_components/ui/input";
import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";

export default async function Home() {
  const data = await getBlogs();

  return (
    <main className="flex flex-1 flex-col gap-10 px-3">
      <div className="flex flex-col items-center gap-2 pb-6 pt-16">
        <p className="w-full min-w-0 max-w-64 text-pretty text-center font-light text-zinc-500">
          بلاگی جایی برای هرکسیه که دوست داره ایده و دیدگاهش رو به نوشته تبدیل کنه
        </p>

        <form action="/blog" className="flex">
          <Input className="max-w-64" id="query" name="query" placeholder="جستجو..." />
          <button className="flex size-9 shrink-0 items-center justify-center bg-black text-white" type="submit">
            <RiSearch2Line className="size-full p-2" />
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-3">
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

        <div className="flex justify-center">
          <Link
            className="border border-zinc-400 px-4 py-2 text-sm transition-colors hover:bg-black hover:text-white focus:border-transparent focus:bg-black focus:text-white"
            href="/blog"
          >
            نمایش تمام مقالات
          </Link>
        </div>
      </div>
    </main>
  );
}
