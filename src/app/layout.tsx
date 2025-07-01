import CallNowBanner from "@/components/call-now-banner/CallNowBanner";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <CallNowBanner />
        <Footer />
      </body>
    </html>
  );
}
