import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/lib/env";

const schema = z.object({
  ime: z.string().min(2, "Unesite ime").max(100),
  email: z.string().email("Neispravna email adresa"),
  telefon: z.string().max(30).optional(),
  poruka: z.string().min(10, "Poruka mora imati najmanje 10 karaktera").max(2000),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { ime, email, telefon, poruka } = parsed.data;

  const textBody = [
    `Ime: ${ime}`,
    `Email: ${email}`,
    telefon ? `Telefon: ${telefon}` : null,
    ``,
    `Poruka:`,
    poruka,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const htmlBody = `
    <p><strong>Ime:</strong> ${ime}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${telefon ? `<p><strong>Telefon:</strong> ${telefon}</p>` : ""}
    <hr />
    <p><strong>Poruka:</strong></p>
    <p>${poruka.replace(/\n/g, "<br/>")}</p>
  `;

  const credentials = Buffer.from(
    `${env.MAILJET_API_KEY}:${env.MAILJET_SECRET_KEY}`,
  ).toString("base64");

  const mjRes = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: env.SITE_MAIL_SENDER, Name: "PB Architect" },
          To: [{ Email: env.SITE_MAIL_RECEIVER, Name: "PB Architect" }],
          ReplyTo: { Email: email, Name: ime },
          Subject: `Nova poruka sa sajta — ${ime}`,
          TextPart: textBody,
          HTMLPart: htmlBody,
        },
      ],
    }),
  });

  if (!mjRes.ok) {
    console.error("Mailjet greška:", await mjRes.text());
    return NextResponse.json(
      { error: "Slanje nije uspelo. Pokušajte ponovo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
