"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigationItems = [
  { name: "Hakkımda", href: "/hakkimda" },
  { name: "İletişim", href: "/iletisim" },
  { name: "Yazılarımız", href: "/yazilarimiz" },
  { name: "Videolarımız", href: "/videolarimiz" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header className="top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm h-20 min-h-20 max-h-20 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/logo/logo-256.webp"
              alt="Özkan Hukuk & Danışmanlık"
              width={192}
              height={72}
              className="w-[192px] h-[72px] object-contain"
              priority
            />
          </Link>

          <nav className="hidden HamburgerMenu:flex items-center space-x-10 h-full">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden HamburgerMenu:flex items-center h-full">
            <a
              href="tel:+905432041420"
              className="text-base font-bold text-blue-600 hover:text-blue-500"
            >
              +90 534 018 1933
            </a>
          </div>

          <div className="HamburgerMenu:hidden flex items-center h-full">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Menüyü aç"
                  className="w-10 h-10"
                >
                  {open ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="pt-6 pb-6 z-[9999] bg-[#f6f6f6] "
                style={{ height: "auto", maxHeight: "100dvh" }}
              >
                <SheetTitle className="sr-only">Mobil Menü</SheetTitle>
                <div className="flex justify-center mb-6">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/logo/logo-256.webp"
                      alt="Logo"
                      width={192}
                      height={72}
                      className="w-[192px] h-[72px] object-contain"
                    />
                  </Link>
                </div>
                <nav className="space-y-4 px-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        pathname === item.href
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-5">
                    <a
                      href="tel:+905432041420"
                      className="block w-full text-center px-4 py-3 text-blue-600 text-lg font-bold bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      +90 534 018 1933
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
