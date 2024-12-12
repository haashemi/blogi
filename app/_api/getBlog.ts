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

const sampleMarkdown = `# سلام دنیا! 👋

## مقدمه
این یک مقاله نمونه است که از تمام ویژگی‌های مارک‌داون استفاده می‌کند.

### لیست‌ها
- آیتم اول
- آیتم دوم
  - زیر آیتم
  - زیر آیتم دیگر
1. لیست شماره‌دار
2. آیتم دوم

### کد
\`\`\`typescript
function hello(name: string): string {
    return \`سلام \${name}!\`;
}
\`\`\`

### نقل قول
> این یک نقل قول است
> که در چند خط نوشته شده

### متن با استایل
**متن پررنگ** و *متن ایتالیک* و ~~متن خط خورده~~

### لینک و تصویر
[لینک به گیت‌هاب](https://github.com)
![تصویر نمونه](https://picsum.photos/200/300)

### جدول
| ستون اول | ستون دوم |
|----------|----------|
| سلول 1   | سلول 2   |
| سلول 3   | سلول 4   |

### خط افقی
---

### چک لیست
- [x] وظیفه انجام شده
- [ ] وظیفه در حال انجام
- [ ] وظیفه انجام نشده`;

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
