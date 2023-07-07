import AuthProviders from "@/components/auth/AuthProviders";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth with v13",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviders>
          <NavBar />
          {children}
        </AuthProviders>
      </body>
    </html>
  );
}
