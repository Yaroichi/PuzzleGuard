import { Link } from "react-router-dom";


// Лого PuzzleGuard (щит + пазл)
function FooterLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 41.25 45" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient
          id="footer-logo-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="objectBoundingBox"
          gradientTransform="matrix(0.32 -0.466 0.68 0.466 0 0.5)"
        >
          <stop offset="0" stopColor="#4CE1AE" />
          <stop offset="0.5" stopColor="#65C1DB" />
          <stop offset="1" stopColor="#75ADF7" />
        </linearGradient>
      </defs>
      <path
        fill="url(#footer-logo-gradient)"
        d="M 24.75 0.497 C 26.272 0.497 27.74 1.058 28.875 2.073 C 30.009 3.088 30.73 4.485 30.899 5.997 L 37.125 5.997 C 38.219 5.997 39.268 6.432 40.042 7.205 C 40.815 7.979 41.25 9.028 41.25 10.122 L 41.25 19.06 L 36.438 19.06 C 35.526 19.06 34.651 19.422 34.007 20.067 C 33.362 20.711 33.0 21.586 33.0 22.497 C 33.0 23.409 33.362 24.283 34.007 24.928 C 34.651 25.573 35.526 25.935 36.438 25.935 L 41.25 25.935 L 41.25 34.872 C 41.25 35.966 40.815 37.015 40.042 37.789 C 39.268 38.563 38.219 38.997 37.125 38.997 L 30.899 38.997 C 30.73 40.509 30.009 41.906 28.874 42.92 C 27.74 43.935 26.272 44.496 24.75 44.496 C 23.228 44.496 21.76 43.935 20.626 42.92 C 19.491 41.906 18.77 40.509 18.601 38.997 L 12.375 38.997 C 11.281 38.997 10.232 38.563 9.458 37.789 C 8.685 37.015 8.25 35.966 8.25 34.872 L 8.25 24.986 L 8.489 25.074 C 9.232 25.305 10.021 25.308 10.766 25.074 L 11.0 24.991 L 11.0 34.872 C 11.0 35.237 11.145 35.587 11.403 35.844 C 11.661 36.102 12.01 36.247 12.375 36.247 L 21.312 36.247 L 21.312 38.31 C 21.312 39.221 21.675 40.096 22.319 40.74 C 22.964 41.385 23.838 41.747 24.75 41.747 C 25.662 41.747 26.536 41.385 27.181 40.74 C 27.825 40.096 28.188 39.221 28.188 38.31 L 28.188 36.247 L 37.125 36.247 C 37.49 36.247 37.839 36.102 38.097 35.844 C 38.355 35.587 38.5 35.237 38.5 34.872 L 38.5 28.685 L 36.438 28.685 C 34.796 28.685 33.223 28.033 32.062 26.872 C 30.902 25.712 30.25 24.138 30.25 22.497 C 30.25 20.856 30.902 19.282 32.062 18.122 C 33.223 16.962 34.796 16.31 36.438 16.31 L 38.5 16.31 L 38.5 10.122 C 38.5 9.758 38.355 9.408 38.097 9.15 C 37.839 8.892 37.49 8.747 37.125 8.747 L 28.188 8.747 L 28.188 6.685 C 28.187 5.953 27.953 5.24 27.519 4.65 C 27.085 4.06 26.475 3.624 25.776 3.405 C 25.077 3.187 24.327 3.197 23.634 3.435 C 22.942 3.673 22.343 4.125 21.926 4.727 C 21.735 3.755 21.173 2.897 20.358 2.334 C 20.932 1.752 21.616 1.29 22.37 0.974 C 23.123 0.659 23.933 0.497 24.75 0.497 Z M 8.58 0.395 C 8.868 0.141 9.24 0.0 9.625 0.0 C 10.01 0.0 10.382 0.141 10.67 0.395 C 12.07 1.726 14.751 3.844 18.048 4.278 C 18.708 4.364 19.25 4.861 19.25 5.48 L 19.25 11.288 C 19.25 19.093 11.594 21.928 9.938 22.448 C 9.736 22.513 9.517 22.513 9.314 22.448 C 7.659 21.925 0.0 19.093 0.0 11.288 L 0.0 5.48 C 0.0 4.861 0.542 4.364 1.202 4.278 C 4.499 3.844 7.183 1.726 8.58 0.395 Z"
      />
    </svg>
  );
}

// Колонки посилань
const columns = [
  { title: "Product", links: ["About", "Puzzles", "Pricing"] },
  { title: "Contacts", links: ["Help Center", "Guides", "Contact"] },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Cookie settings", to: "/cookies" },
      { label: "Security", to: "/security" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0A1628] to-[#0F1E35]">
      {/* Зелена лінія-роздільник зверху */}
      <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#60EEB2,transparent)]" />

      <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-16">
        {/* Картка */}
        <div className="rounded-[30px] border border-white/5 bg-[#0A1628] p-6 sm:p-8 lg:p-12">
          {/* Стовпчиком аж до xl; поряд — лише на широких екранах */}
          <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-16">
            {/* Ліва частина — розсилка */}
            <div className="w-full xl:max-w-[520px]">
              <div className="flex items-center gap-3">
                <FooterLogo className="h-10 w-auto shrink-0" />
                <h3 className="font-mooli text-2xl leading-tight text-white lg:text-[28px]">
                  Stay sharp with weekly puzzles
                </h3>
              </div>

              <p className="mt-5 font-mooli text-base text-[#A7B3D2] lg:text-lg">
                Don’t miss out on fun puzzles and updates! Subscribe to get
                weekly quizzes, news, and special bonuses for our subscribers.
              </p>

              {/* Поле email + кнопка */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <input
                  type="email"
                  placeholder="you@gmail.com"
                  className="h-[54px] w-full min-w-0 max-w-[367px] flex-1 rounded-[15px] bg-[#334B6C] px-4 font-mooli text-lg text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-[#60EEB2]"
                />
                <button
                  type="button"
                  className="h-[54px] rounded-[20px] bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] px-6 font-mooli text-black transition-opacity hover:opacity-90"
                >
                  Subscribe
                </button>
              </div>

              {/* Погодження */}
              <p className="mt-5 font-mooli text-sm text-white lg:text-base">
                By subscribing you agree to our{" "}
                <a href="#" className="text-[#A78BFA] hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Права частина — колонки посилань */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 xl:gap-x-12">
              {columns.map((col) => (
                <div key={col.title} className="min-w-0">
                  <h4 className="font-mooli text-lg text-white lg:text-2xl">
                    {col.title}
                  </h4>
                  <ul className="mt-4 flex flex-col gap-3">
                    {col.links.map((link) => {
                      // Поки що Product/Contacts — це рядки, а Legal — обʼєкти з адресою
                      const label = link.label ?? link;
                      const style =
                        "font-mooli text-base text-[#A7B3D2] transition-colors hover:text-white lg:text-xl";

                      return (
                        <li key={label}>
                          {link.to ? (
                            <Link to={link.to} className={style}>
                              {label}
                            </Link>
                          ) : (
                            <a href="#" className={style}>
                              {label}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Копірайт — усередині картки, справа знизу */}
          <p className="mt-10 text-center font-mooli text-base text-[#A7B3D2] sm:text-right lg:text-lg">
            ©2025 PuzzleGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
