"use client";

import PageHeader from "@/components/PageHeader";
import ContactForm from "../components/ContactForm";
import dynamic from "next/dynamic";
import ContactDetails from "../components/ContactDetails";

const ContactMap = dynamic(
  () => import("@/features/iletisim/components/ContactMap"),
  { ssr: false }
);

export default function ContactWrapper() {
  return (
    <>
      <PageHeader
        title="İletişim"
        description="Profesyonel hukuk danışmanlığı için bizimle iletişime geçin."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 overflow-x-hidden">
        <div className="grid grid-cols-1 xlgrid:grid-cols-12 gap-8 w-full max-w-full overflow-hidden">
          <div className="xlgrid:col-span-8 w-full max-w-full min-w-0">
            <ContactForm />
          </div>
          <div className="xlgrid:col-span-4 w-full max-w-full min-w-0 mt-8 xlgrid:mt-0">
            <ContactDetails />
          </div>
        </div>
        <ContactMap />
      </div>
    </>
  );
}
