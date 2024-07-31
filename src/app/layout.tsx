import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/lib/CartProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Cartiie",
  description: "Cart functionality app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="min-h-screen flex flex-col items-center px-2">
          <Navbar />
          <CartProvider>{children}</CartProvider>
          {/* </CartContext.Provider> */}
        </main>
      </body>
    </html>
  );
}
