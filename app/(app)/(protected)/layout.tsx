// TODO: Protect routes from here
export default function AuthProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
