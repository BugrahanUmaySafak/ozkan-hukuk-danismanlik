"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type WizardSchema } from "./Form";
import { sendContactMessage } from "../actions/sendContactAction";
import Image from "next/image";
import { Send, Loader2 } from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  onSuccess?: (message: string) => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showInfoMessage, setShowInfoMessage] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);

  const form = useForm<WizardSchema>({
    resolver: zodResolver(contactSchema()),
  });

  const onSubmit = async (data: WizardSchema) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    setShowInfoMessage(false);

    try {
      await sendContactMessage(data);
      const message =
        "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.";
      setSuccessMessage(message);
      onSuccess?.(message);
      form.reset();
    } catch (error: any) {
      setErrorMessage(error.message || "Mesaj gönderilemedi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (successMessage && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [successMessage]);

  return (
    <div
      ref={formRef}
      className="rounded-xl shadow-lg overflow-hidden border border-gray-200 h-full"
    >
      <div className="relative w-full aspect-[3/1]">
        <Image
          src="/images/alpertunaozkan-desktop-1440w.webp"
          alt="Avukat Alper Tuna Özkan - Profesyonel hukuk danışmanlığı"
          fill
          className="object-cover object-center rounded-t-xl"
          priority
          placeholder="blur"
          blurDataURL="/images/alpertunaozkan-mobile-480w.webp"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 90vw, (max-width: 1440px) 80vw, 60vw"
        />
      </div>

      <div className="p-6">
        <div className="pb-2">
          {showInfoMessage && (
            <Alert variant="info">
              <AlertDescription>
                E-posta adresi veya telefon numarasından en az birini girmeniz
                gerekmektedir.
              </AlertDescription>
            </Alert>
          )}

          {errorMessage && (
            <Alert variant="destructive">
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          {successMessage && (
            <Alert variant="success">
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adınız Soyadınız *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-posta</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konu *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mesajınız *</FormLabel>
                  <FormControl>
                    <Textarea rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              variant="default"
              type="submit"
              disabled={isSubmitting}
              className="w-full gap-4"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Gönderiliyor...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Mesajı Gönder
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
