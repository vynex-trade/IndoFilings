import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "IndoFilings",
  description: "IndoFilings is your trusted partner for hassle-free company registration and compliance services in Indonesia. We provide expert guidance and support to help you navigate the complexities of starting and running a business in Indonesia, ensuring a smooth and efficient process from start to finish.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0a0a0a] transition-colors duration-300 min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}