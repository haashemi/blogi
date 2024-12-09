import { z } from "zod";

export const BlogRespSchema = z.object({
  title: z.string().max(1024, "تیتر بیشتر از 1024 کارکتر است."),
  summary: z.string().max(2048, "خلاصه بلاگ بیشتر از 2048 کارکتر است."),
  content: z.string(),
  createdAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
  updatedAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
  authorName: z.string().max(256, "نام نویسنده بیشتر از 256 کارکتر است."),
  authorUsername: z.string().max(32, "یوزرنیم نویسنده بیشتر از 32 کارکتر است."),
  authorAbout: z.nullable(z.string().max(2048, "درباره نویسنده بیشتر از 2048 کارکتر است.")),
});

const sampleMarkdown = `# Heading 1## Heading 2### Heading 3**Bold Text** and *Italic Text* and ***Bold Italic***> This is a blockquote> Multiple lines> Here1. Ordered List Item 12. Ordered List Item 2  - Nested unordered item  - Another nested item* Unordered List* Another item  * Sub item  * Another sub item\`package mainfunc main() {}\``;

const data = {
  title: "نمونه اولیه بلاگ پست های سایت بلاگی",
  summary:
    "یک خلاصه‌ی نمونه جهت شبیه سازی نوشتار متون بلند برای پست ها. این یک توضیحات جهت شبیه سازی است و فاقد اهمیت.",
  content: sampleMarkdown,
  createdAt: "2024-10-03T20:57:18.077417Z",
  updatedAt: "2024-10-03T20:57:18.077417Z",
  authorName: "علی هاشمی",
  authorUsername: "haashemi",
  authorAbout: "یه برنامه نویس چموش که داره پروژه دانشگاهیش رو انجام میده",
};

export const getBlog = async (id: number | string) => {
  return BlogRespSchema.parseAsync(data); // resp.json()
};
