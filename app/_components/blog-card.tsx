import { farsiDates } from "@/app/_lib/farsiDates";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export interface BlogCardProps {
  id: number;
  title: string;
  summary: string;
  authorName: string;
  publishedAt: Date;
}

export const BlogCard = ({ id, title, summary, authorName, publishedAt }: BlogCardProps) => {
  return (
    <Link
      className="group flex flex-col gap-2 border border-zinc-300 px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-md focus:bg-black focus:text-white"
      href={`/blog/${id}`}
    >
      <h2 className="line-clamp-1 text-lg font-bold text-zinc-800 group-focus:text-zinc-100 sm:text-xl">{title}</h2>

      <p className="line-clamp-3 text-sm font-light text-zinc-700 group-focus:text-zinc-200">{summary}</p>

      <div className="mt-2 flex justify-between">
        <p className="text-xs">
          توسط {authorName} در {farsiDates(publishedAt)}
        </p>
        <button className="mr-auto flex w-fit items-center text-nowrap text-xs" type="button">
          مطالعه‌ <RiArrowLeftSLine className="size-4" />
        </button>
      </div>
    </Link>
  );
};
