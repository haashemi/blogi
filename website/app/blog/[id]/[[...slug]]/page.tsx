export default function BlogPage({ params: { id } }: { params: { id: string } }) {
  return (
    <main className="flex flex-1 flex-col gap-10 px-3">
      <h1>تیتر وبلاگ {id}</h1>
      <p>توضیحات وبلاگ</p>

      <hr />
      <article className="prose ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium nisi itaque eius ullam
          voluptatem ex voluptatibus doloremque explicabo ducimus, sed quisquam exercitationem, dolores quibusdam
          accusantium sequi, sapiente quis neque?
        </p>
      </article>
      <hr />

      <div>
        <h2>نام نویسنده</h2>
        <p>درباره‌ی نویسنده</p>
      </div>
    </main>
  );
}
