"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "../components/ContactForm";
import dynamic from "next/dynamic";

const ContactMap = dynamic(
  () => import("@/features/iletisim/components/ContactMap"),
  { ssr: false }
);

import StaticContactDetails from "@/features/iletisim/components/ContactDetails";

export default function ContactWrapper() {
  const [ContactDetailsComponent, setContactDetailsComponent] =
    useState<React.ComponentType | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1190;

    if (isMobile) {
      import("@/features/iletisim/components/ContactDetails").then((mod) =>
        setContactDetailsComponent(() => mod.default)
      );
    } else {
      setContactDetailsComponent(() => StaticContactDetails);
    }
  }, []);

  return (
    <>
      <PageHeader
        title="İletişim"
        description="Profesyonel hukuk danışmanlığı için bizimle iletişime geçin."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 overflow-x-hidden">
        <div className="grid grid-cols-1 ContactGrid:grid-cols-12 gap-8 w-full max-w-full overflow-hidden">
          <div className="ContactGrid:col-span-8 w-full max-w-full min-w-0">
            <ContactForm />
          </div>
          <div className="ContactGrid:col-span-4 w-full max-w-full min-w-0 mt-8 ContactGrid:mt-0">
            {ContactDetailsComponent && <ContactDetailsComponent />}
          </div>
        </div>
        <ContactMap />
      </div>
    </>
  );
}
