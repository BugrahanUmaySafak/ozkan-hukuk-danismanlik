import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 w-full aspect-[3/4] relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/alpertunaozkan-laptop-1024w.webp"
              alt="Avukat Alper Tuna Özkan"
              fill
              sizes="(max-width: 480px) 100vw,
                     (max-width: 768px) 100vw,
                     (max-width: 1024px) 50vw,
                     (max-width: 1440px) 50vw,
                     50vw"
              className="object-cover object-center"
              priority
              placeholder="blur"
              blurDataURL="/images/alpertunaozkan-mobile-480w.webp"
            />
          </div>

          <div className="md:col-span-6 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Alper Tuna Özkan
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p>
                1994 yılında Kırıkkale'de doğmuştur. İlk, orta ve lise
                öğrenimini burada tamamlamıştır. 2019 yılında Ufuk Üniversitesi
                Hukuk Fakültesi'nden mezun olmuştur.
              </p>
              <p>
                Kariyerinde birçok büyük şirketle çalışmış, İş ve Tüketici
                Hukuku başta olmak üzere birçok alanda danışmanlık ve avukatlık
                yapmıştır.
              </p>
              <p>
                Şu anda Deva Avukatlık Hukuk Bürosu'nda mesleğine devam etmekte
                olup, müvekkillerine etik değerlere bağlı kalarak profesyonel
                destek sunmaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
