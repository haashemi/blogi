import { getBlog } from "@/app/_api/getBlog";
import { Markdown } from "@/app/_components/markdown";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const blog = await getBlog(id);

  return (
    <main className="flex flex-1 flex-col gap-10 px-3">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p>{blog.summary}</p>
        <p className="text-xs text-zinc-700">
          {"توسط "}
          <Link className="underline" href={`/author/${blog.authorUsername}`}>
            {blog.authorName}
          </Link>
          {" در "}
          {blog.createdAt.toLocaleString("fa")}
        </p>
      </div>

      <hr />

      <article className="prose">
        <Markdown content={blog.content} />
      </article>

      <hr />

      <Link
        className="group flex flex-col gap-2 border border-zinc-300 px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-md focus:bg-black focus:text-white"
        href={`/author/${blog.authorUsername}`}
      >
        <h2 className="line-clamp-1 text-lg font-bold text-zinc-800 group-focus:text-zinc-100 sm:text-xl">
          {blog.authorName}
        </h2>

        <p className="line-clamp-3 text-sm font-light text-zinc-700 group-focus:text-zinc-200">{blog.authorAbout}</p>

        <div className="mt-2 flex justify-between">
          <button className="mr-auto flex w-fit items-center text-nowrap text-xs" type="button">
            دیگر مقالات <RiArrowLeftSLine className="size-4" />
          </button>
        </div>
      </Link>
    </main>
  );
}
