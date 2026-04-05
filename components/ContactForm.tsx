"use client";

import { useState } from "react";

interface FormState {
  ime: string;
  email: string;
  telefon: string;
  poruka: string;
}

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    ime: "",
    email: "",
    telefon: "",
    poruka: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ ime: "", email: "", telefon: "", poruka: "" });
      } else {
        const data = await res.json();
        setErrorMsg(
          typeof data.error === "string"
            ? data.error
            : "Slanje nije uspelo. Pokušajte ponovo.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Greška pri slanju. Proverite internet konekciju.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 border border-[#c4a84f] bg-[#fdf9f0] p-8">
        <div className="flex h-12 w-12 items-center justify-center bg-[#c4a84f]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1a1a1a]">
          Poruka je poslata!
        </h3>
        <p className="text-[#6b6b6b]">
          Hvala na poruci. Odgovorićemo vam u najkraćem roku.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-[#c4a84f] underline underline-offset-4 hover:no-underline"
        >
          Pošalji novu poruku
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border border-[#e0ddd8] bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#bbb] outline-none transition-colors focus:border-[#c4a84f]";
  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-[#6b6b6b]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ime" className={labelClass}>
            Ime i prezime <span className="text-[#c4a84f]">*</span>
          </label>
          <input
            id="ime"
            name="ime"
            type="text"
            required
            value={form.ime}
            onChange={handleChange}
            placeholder="Vaše ime"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email adresa <span className="text-[#c4a84f]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="vasa@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="telefon" className={labelClass}>
          Broj telefona
        </label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          value={form.telefon}
          onChange={handleChange}
          placeholder="+381 ..."
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="poruka" className={labelClass}>
          Poruka <span className="text-[#c4a84f]">*</span>
        </label>
        <textarea
          id="poruka"
          name="poruka"
          required
          rows={6}
          value={form.poruka}
          onChange={handleChange}
          placeholder="Opišite vaš projekat ili upit..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 bg-[#c4a84f] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a8893a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Slanje...
          </>
        ) : (
          <>
            Pošalji poruku
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
