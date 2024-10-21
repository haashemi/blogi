import { z } from "zod";

export const ListedBlogSchema = z.object({
  id: z.number().positive("آیدی بلاگ پست منفی است."),
  title: z.string().max(128, "تیتر بیشتر از 128 کارکتر است."),
  summary: z.string(),
  authorName: z.string().max(256, "نام نویسنده بیشتر از 256 کارکتر است."),
  publishedAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
});

const BlogRespSchema = z.array(ListedBlogSchema);

const data = new Array(12).fill({
  id: 1,
  title: "نمونه اولیه بلاگ پست های سایت بلاگی",
  summary:
    "یک خلاصه‌ی نمونه جهت شبیه سازی نوشتار متون بلند برای پست ها. این یک توضیحات جهت شبیه سازی است و فاقد اهمیت.",
  authorName: "علی هاشمی",
  publishedAt: "2024-10-03T20:57:18.077417Z",
});

export const blogs = async (page: string) => {
  return {
    posts: await BlogRespSchema.parseAsync(data),
    remainingPages: 2,
  };
};
