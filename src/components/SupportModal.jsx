import { useState, useEffect } from "react";

export default function SupportModal({ open, onClose }) {
  // Значення полів форми
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Закриття по клавіші Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSend = () => {
    // Поки без бекенду — тут згодом буде відправка на сервер.
    console.log({ name, email, message });
    onClose();
  };

  const inputClass =
    "w-full rounded-xl bg-gradient-to-br from-[#0A1628] via-[#17325B] to-[#0A1628] px-4 py-3 font-mooli text-white placeholder:text-[#A7B3D2] focus:outline-none focus:ring-2 focus:ring-[#60EEB2]";
  const labelClass = "font-mooli text-[#A7B3D2] lg:text-xl";

  return (
    // Затемнений фон. Клік по ньому закриває модалку.
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      {/* Сама панель. stopPropagation — щоб клік усередині не закривав. */}
      <div
        className="relative max-h-[90vh] w-full max-w-[720px] overflow-y-auto rounded-[28px] bg-gradient-to-br from-[#0A1628] via-[#17325B] to-[#0A1628] p-6 sm:p-10 lg:p-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закриття */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрити"
          className="absolute right-6 top-6 text-white transition-opacity hover:opacity-70"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <h2 className="font-mooli text-3xl text-[#D3CBEA] lg:text-[44px]">
          Contact Support
        </h2>
        <p className="mt-3 font-mooli text-base text-[#A7B3D2] lg:text-[22px]">
          Tell us what’s happening and we’ll reply to your email.
        </p>

        <div className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className={labelClass}>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClass}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClass}>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your issue or question…"
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSend}
          className="mt-8 w-full rounded-xl bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] py-4 font-mooli text-lg text-[#0B1126] transition-opacity hover:opacity-90"
        >
          Send
        </button>
      </div>
    </div>
  );
}
