import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col items-center px-2 w-full">
      <MaxWidthWrapper className="">{children}</MaxWidthWrapper>
    </main>
  );
}
