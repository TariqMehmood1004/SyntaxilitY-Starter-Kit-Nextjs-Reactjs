import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TClerkWithTheme from "@/provider/TClerkProvider";
import { ThemeProvider } from "@/components/ui/theme-provider";
import TFooter from "@/components/TFooter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SyntaxilitY - a starter ui kit",
  description: "A UI kit for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TClerkWithTheme>
            <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
            {children}

            <TFooter />
          </TClerkWithTheme>
        </ThemeProvider>
      </body>
    </html>
  );
}