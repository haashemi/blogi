import { z } from "zod";

export const ListedBlogSchema = z.object({
  id: z.number().positive("آیدی بلاگ پست منفی است."),
  title: z.string().max(1024, "تیتر بیشتر از 1024 کارکتر است."),
  summary: z.string().max(2048, "خلاصه بلاگ بیشتر از 2048 کارکتر است."),
  authorName: z.string().max(256, "نام نویسنده بیشتر از 256 کارکتر است."),
  publishedAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
});

const BlogsRespSchema = z.array(ListedBlogSchema);

const data = new Array(12).fill({
  id: 1,
  title: "نمونه اولیه بلاگ پست های سایت بلاگی",
  summary:
    "یک خلاصه‌ی نمونه جهت شبیه سازی نوشتار متون بلند برای پست ها. این یک توضیحات جهت شبیه سازی است و فاقد اهمیت.",
  authorName: "علی هاشمی",
  publishedAt: "2024-10-03T20:57:18.077417Z",
});

export const getBlogs = async (query?: string) => {
  return {
    posts: await BlogsRespSchema.parseAsync(data), // resp.json()
    remainingPages: 2, // headers["x-total-count"]
  };
};
