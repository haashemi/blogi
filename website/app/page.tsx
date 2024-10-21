import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

const latestPosts: number[] = new Array(3).fill(1);

export default function Home() {
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
          {latestPosts.map((v) => (
            <Link
              className="group flex flex-col gap-2 border border-zinc-300 px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-md focus:bg-black focus:text-white"
              href={`/blog/${v}`}
              key={v}
            >
              <h2 className="line-clamp-1 text-lg font-bold text-zinc-800 group-focus:text-zinc-100 sm:text-xl">
                چگونه در ایران زنده بمونیم تو این وضعیت؟
              </h2>

              <p className="line-clamp-3 text-sm font-light text-zinc-700 group-focus:text-zinc-200">
                مقاله‌ای من‌باب چگونگی زنده ماندن در کشوری که هر خری توش پیدا میشه و می زنه دهنتو میگاد و دیگه جونت به
                لبت می رسه و می خوای خار همرو بگایی
              </p>

              <button className="mr-auto flex w-fit items-center text-nowrap text-xs" type="button">
                مطالعه‌ <RiArrowLeftSLine className="size-4" />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
