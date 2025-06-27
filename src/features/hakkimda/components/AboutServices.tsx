import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";


export default function AboutServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Hukuki Hizmetlerim
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Müvekkillerime sunduğum kapsamlı hukuki hizmetler ile her türlü
            hukuki sorununuza profesyonel çözümler sunuyorum.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
