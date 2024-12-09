import { getBlog } from "@/app/_api/getBlog";

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const blog = await getBlog(id);

  return (
    <main className="flex flex-1 flex-col gap-10 px-3">
      <h1>{blog.title}</h1>
      <p>{blog.summary}</p>

      <hr />

      <article className="prose">{blog.content}</article>

      <hr />

      <div>
        <h2>{blog.authorName}</h2>
        <h3>{blog.authorUsername}</h3>
        <p>{blog.authorAbout}</p>
      </div>
    </main>
  );
}
