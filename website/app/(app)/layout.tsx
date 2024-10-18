export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="flex h-20 w-full items-center justify-between border border-t-0 border-zinc-300 px-3">
        <h1 className="text-3xl font-black">بلاگی</h1>
        <button className="bg-black px-4 py-2 text-white">ورود / ثبت‌نام</button>
      </header>

      {children}
    </>
  );
}
