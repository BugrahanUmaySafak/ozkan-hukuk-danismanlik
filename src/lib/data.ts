import {
  Scale,
  FileText,
  BookOpen,
  Users,
  Building,
  Gavel,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Hukuki Danışmanlık",
    description:
      "Bireysel ve kurumsal müvekkillerimize kapsamlı hukuki danışmanlık hizmetleri sunuyoruz.",
    icon: Scale,
  },
  {
    id: 2,
    title: "Dava Takibi",
    description:
      "Hukuki süreçlerinizi profesyonel bir şekilde yönetiyor ve takip ediyoruz.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Sözleşme Hazırlama",
    description:
      "İhtiyaçlarınıza uygun, hukuki açıdan güvenli sözleşmeler hazırlıyoruz.",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "İş Hukuku",
    description: "İş hukuku alanında işveren ve çalışan haklarını koruyoruz.",
    icon: Users,
  },
  {
    id: 5,
    title: "Ticaret Hukuku",
    description: "Ticari faaliyetlerinizde hukuki güvence sağlıyoruz.",
    icon: Building,
  },
  {
    id: 6,
    title: "Miras Hukuku",
    description: "Miras işlemlerinizde profesyonel destek sunuyoruz.",
    icon: Gavel,
  },
];
