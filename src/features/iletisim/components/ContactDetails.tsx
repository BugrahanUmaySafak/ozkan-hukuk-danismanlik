import { MapPin, Phone, Mail, Clock, Users } from "lucide-react";
import ContactInfoCard from "@/features/iletisim/components/ContactInfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-y-8 ContactGrid:gap-y-16 h-full">
      <ContactInfoCard title="Adres" icon={MapPin} iconColor="text-red-500">
        <a
          href="https://www.google.com/maps/place/Avukat+Alper+Tuna+%C3%96zkan/@39.8406944,33.4994228,17z/data=!4m15!1m8!3m7!1s0x4081df7569936f09:0x5db73b4f4e8e2b46!2zRmFicmlrYWxhciwgVWx1YmF0bMSxIEhhc2FuIENkLiBObzoyMiwgNzExMDAgS8SxcsSxa2thbGUgTWVya2V6L0vEsXLEsWtrYWxl!3b1!8m2!3d39.8406944!4d33.4994228!16s%2Fg%2F11nnkxmqty!3m5!1s0x4081dfc47d45dad9:0x14c2d5e99e2f7579!8m2!3d39.8413091!4d33.5002971!16s%2Fg%2F11pzbkt940?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="block not-italic leading-relaxed text-center pt-1 hover:text-blue-600 transition-colors"
        >
          <address className="not-italic font-medium">
            Yaylacık Mahallesi Ulubatlıhasan Caddesi <br />
            Aydınlık Apartmanı, No: 22/9 <br />
            71000 Kırıkkale/Merkez
          </address>
        </a>
      </ContactInfoCard>

      <ContactInfoCard
        title="Telefon"
        icon={Phone}
        iconColor="text-green-500"
        variant="compact"
      >
        <div className="text-center pt-2">
          <a
            href="tel:+905340181933"
            className="hover:text-blue-500 transition-colors text-lg font-medium"
          >
            +90 (534) 018 1933
          </a>
        </div>
      </ContactInfoCard>

      <ContactInfoCard
        title="E-posta"
        icon={Mail}
        iconColor="text-purple-500"
        variant="compact"
      >
        <div className="text-center pt-2">
          <a
            href="mailto:av.alpertunaozkan@gmail.com"
            className="hover:text-blue-500 transition-colors text-lg font-medium break-all"
          >
            av.alpertunaozkan@gmail.com
          </a>
        </div>
      </ContactInfoCard>

      <ContactInfoCard
        title="Çalışma Saatleri"
        icon={Clock}
        iconColor="text-orange-500"
      >
        <div className="text-center pt-2">
          <p className="font-medium">Pazartesi - Cuma: 09:00 - 18:00</p>
          <p className="text-slate-500">Hafta sonu: Kapalı</p>
        </div>
      </ContactInfoCard>

      <ContactInfoCard
        title="Sosyal Medya"
        icon={Users}
        iconColor="text-indigo-500"
      >
        <div className="flex justify-center gap-4 pt-2">
          {[
            {
              href: "https://instagram.com",
              icon: faInstagram,
              label: "Instagram",
              className: "bg-gradient-to-r from-purple-500 to-pink-500",
            },
            {
              href: "https://twitter.com",
              icon: faXTwitter,
              label: "Twitter",
              className: "bg-slate-800",
            },
            {
              href: "https://linkedin.com",
              icon: faLinkedin,
              label: "LinkedIn",
              className: "bg-blue-600",
            },
            {
              href: "https://facebook.com",
              icon: faFacebook,
              label: "Facebook",
              className: "bg-blue-700",
            },
          ].map(({ href, icon, label, className }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`w-10 h-10 ${className} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
            >
              <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </ContactInfoCard>
    </div>
  );
}
