import { useState, useEffect } from "react";

export default function ScrollToTop() {
  // Чи показувати кнопку (зʼявляється після прокрутки вниз)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Стежимо за прокруткою: якщо гортнули більш ніж на 300px — показуємо кнопку
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    // Прибираємо слухача, коли компонент зникає (щоб не було витоків)
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Наверх"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] text-[#0A1628] shadow-lg transition-opacity hover:opacity-90 lg:bottom-8 lg:right-8 lg:h-14 lg:w-14"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" aria-hidden="true">
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
