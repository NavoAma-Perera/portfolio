import HeaderNav from './(components)/navbar'

export default function pageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black bg-opacity-80">
      <HeaderNav />
      <main className="pt-20">{children}</main>
    </div>
  );
}
