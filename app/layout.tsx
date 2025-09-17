import "./globals.css";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import { Home, Search, PlusSquare, Heart, User } from "lucide-react";

export const metadata = {
  title: "Portfolio | IG Style",
  description: "Portfolio ala Instagram 🚀",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background text-foreground font-sans")}>
        {/* Navbar ala IG */}
        <nav className="border-b border-default bg-white dark:bg-zinc-900 sticky top-0 z-50">
          <div className="container flex items-center justify-between h-14">
            {/* Logo (pakai text mirip IG font) */}
            <h1 className="text-xl font-bold">Portfolio</h1>

            {/* Nav Icons */}
            <div className="flex items-center gap-6 text-muted">
              <Home className="w-6 h-6 cursor-pointer hover:text-foreground" />
              <Search className="w-6 h-6 cursor-pointer hover:text-foreground" />
              <PlusSquare className="w-6 h-6 cursor-pointer hover:text-foreground" />
              <Heart className="w-6 h-6 cursor-pointer hover:text-foreground" />
              <User className="w-6 h-6 cursor-pointer hover:text-foreground" />
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="container pb-20">{children}</main>
      </body>
    </html>
  );
}
