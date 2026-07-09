// Іконка завантаження (basil:download-outline) — точний вектор із Figma
function DownloadIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 52 52" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill="currentColor"
        d="M 23.27 7.04 C 21.59 7.04 20.19 8.32 20.04 9.99 C 19.74 13.48 19.66 16.99 19.81 20.49 L 19.26 20.53 L 16.04 20.76 C 15.56 20.8 15.11 20.95 14.72 21.22 C 14.32 21.48 14.01 21.84 13.79 22.26 C 13.58 22.69 13.48 23.16 13.51 23.63 C 13.53 24.1 13.68 24.56 13.93 24.96 C 16.31 28.67 19.37 31.9 22.95 34.48 L 24.24 35.41 C 24.76 35.77 25.37 35.97 26.0 35.97 C 26.63 35.97 27.24 35.77 27.76 35.41 L 29.05 34.48 C 32.63 31.91 35.69 28.67 38.07 24.96 C 38.32 24.56 38.47 24.1 38.49 23.63 C 38.52 23.16 38.42 22.69 38.21 22.26 C 37.99 21.84 37.68 21.48 37.28 21.22 C 36.89 20.95 36.44 20.8 35.96 20.76 L 32.74 20.53 L 32.19 20.49 C 32.34 16.99 32.26 13.48 31.96 9.99 C 31.89 9.19 31.52 8.44 30.92 7.89 C 30.32 7.34 29.54 7.04 28.73 7.04 L 23.27 7.04 Z M 23.14 21.92 C 22.9 18.04 22.94 14.16 23.28 10.29 L 28.72 10.29 C 29.06 14.16 29.1 18.04 28.86 21.92 C 28.84 22.13 28.87 22.35 28.94 22.55 C 29.01 22.75 29.12 22.94 29.27 23.1 C 29.41 23.26 29.58 23.39 29.78 23.48 C 29.97 23.58 30.18 23.63 30.4 23.64 C 31.1 23.68 31.8 23.72 32.5 23.77 L 34.84 23.94 C 32.76 27.0 30.16 29.68 27.15 31.84 L 26.0 32.66 L 24.85 31.84 C 21.84 29.68 19.24 27.0 17.16 23.94 L 19.5 23.77 C 20.2 23.72 20.9 23.68 21.6 23.64 C 21.82 23.63 22.03 23.58 22.22 23.48 C 22.42 23.39 22.59 23.26 22.73 23.1 C 22.88 22.94 22.99 22.75 23.06 22.55 C 23.13 22.35 23.16 22.13 23.14 21.92 Z M 12.46 36.83 C 12.46 36.4 12.29 35.99 11.98 35.68 C 11.68 35.38 11.26 35.21 10.83 35.21 C 10.4 35.21 9.99 35.38 9.68 35.68 C 9.38 35.99 9.21 36.4 9.21 36.83 L 9.21 41.17 C 9.21 43.26 10.91 44.96 13.0 44.96 L 39.0 44.96 C 40.01 44.96 40.97 44.56 41.68 43.85 C 42.39 43.14 42.79 42.17 42.79 41.17 L 42.79 36.83 C 42.79 36.4 42.62 35.99 42.32 35.68 C 42.01 35.38 41.6 35.21 41.17 35.21 C 40.74 35.21 40.32 35.38 40.02 35.68 C 39.71 35.99 39.54 36.4 39.54 36.83 L 39.54 41.17 C 39.54 41.31 39.48 41.45 39.38 41.55 C 39.28 41.65 39.14 41.71 39.0 41.71 L 13.0 41.71 C 12.86 41.71 12.72 41.65 12.62 41.55 C 12.52 41.45 12.46 41.31 12.46 41.17 L 12.46 36.83 Z"
      />
    </svg>
  );
}

export default function HomeHeader() {
  return (
    <section className="mx-auto flex max-w-[1600px] flex-col px-5 py-16 md:px-8 lg:px-16 lg:py-28">
      {/* Заголовок: PUZZLE білий + GUARD із фірмовим градієнтом */}
      <h1 className="font-mooli text-5xl leading-none text-white sm:text-6xl lg:text-[88px]">
        PUZZLE{" "}
        <span className="bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] bg-clip-text text-transparent">
          GUARD
        </span>
      </h1>

      {/* Опис */}
      <p className="mt-8 max-w-[623px] text-lg leading-relaxed text-white lg:mt-10 lg:text-[32px]">
        Make your everyday use of programs more challenging and exciting! Solve
        geography, math, and logic puzzles to unlock access to your favorite
        programs.
      </p>

      {/* Кнопка Download */}
      <button
        type="button"
        className="mt-10 flex w-fit items-center gap-3 rounded-[35px] bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] px-8 py-4 font-mooli text-2xl text-[#0B1020] transition-opacity hover:opacity-90 lg:mt-12 lg:px-12 lg:py-5 lg:text-[32px]"
      >
        <DownloadIcon className="h-7 w-7 lg:h-9 lg:w-9" />
        Download
      </button>
    </section>
  );
}
