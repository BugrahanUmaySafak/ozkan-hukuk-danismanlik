import { NextRequest, NextResponse } from "next/server";
import { getIletisimMessagesCollection } from "@/lib/mongodb";
import { contactSchema } from "@/features/iletisim/components/Form";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema().parse(body);

    const message = {
      name: parsed.name.trim(),
      email: parsed.email?.trim() || "",
      phone: parsed.phone?.trim() || "",
      title: parsed.title.trim(),
      content: parsed.content.trim(),
      date: new Date(),
    };

    const collection = await getIletisimMessagesCollection();
    const result = await collection.insertOne(message);

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { headers: { "Cache-Control": "no-cache, no-store, must-revalidate" } }
    );
  } catch (error: any) {
    console.error("API POST hata:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Mesaj gönderilirken hata oluştu.",
      },
      {
        status: 500,
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
      }
    );
  }
}
