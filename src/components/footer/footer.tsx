"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Hakkımda", href: "/hakkimda" },
    { name: "İletişim", href: "/iletisim" },
    { name: "Yazılarımız", href: "/yazilarimiz" },
    { name: "Videolarımız", href: "/videolarimiz" },
  ];

  return (
    <footer className="w-full pb-16 md:pb-20 border-t bg-[#fdf8f2] text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Özkan Hukuk & Danışmanlık. Tüm
          hakları saklıdır.
        </p>

        <nav className="mt-2 sm:mt-0 flex gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-medium ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
