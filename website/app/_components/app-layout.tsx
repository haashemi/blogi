import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border border-t-0 border-zinc-300 bg-zinc-100/75 px-3 backdrop-blur">
      <Link className="text-3xl font-black" href="/">
        بلاگی
      </Link>
      <Link className="bg-black px-4 py-2 text-sm text-white" href="/auth/sign-in">
        ورود / ثبت‌نام
      </Link>
    </header>
  );
};

export const Footer = () => (
  <footer className="mx-auto mb-2 flex h-5 w-fit items-center justify-center border border-zinc-300 px-3 pt-1">
    <a className="text-xs text-zinc-800" href="https://www.haashemi.dev/" rel="noreferrer" target="_blank">
      haashemi.dev
    </a>
  </footer>
);
