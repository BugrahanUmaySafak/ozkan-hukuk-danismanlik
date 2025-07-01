// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fdf8f2] text-center px-4">
      <h1 className="text-2xl font-bold text-blue-600">
        404 - Sayfa Bulunamadı
      </h1>
      <p className="mt-2 text-gray-600">Aradığınız sayfa mevcut değil.</p>
      <Button asChild className="mt-4">
        <Link href="/">Ana sayfaya dön</Link>
      </Button>
    </div>
  );
}
