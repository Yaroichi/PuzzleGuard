import { useState } from "react";
import sliderPhoto from "../assets/HomeSection3Photo.png";
import circlePhoto from "../assets/HomeSection3Circle.png";

// Стрілка-шеврон для кнопок навігації
function Chevron({ dir = "right", className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d={dir === "right" ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Дані слайдів.
const slides = [
  {
    title: "For people who want to learn more",
    text: "\"Turn procrastination into progress — PUZZLE GUARD swaps your scrolling for fun quizzes, math challenges, and brain teasers.\"",
  },
  {
    title: "For anyone who wants mindful app usage",
    text: "\"Pause before you browse — PUZZLE GUARD adds a mindful moment before apps, helping you use your screen time with intention.\"",
  },
  {
    title: "For students who struggle with focus",
    text: "\"Make distractions work for you — PUZZLE GUARD turns study breaks into quick learning sessions with facts, math, and logic puzzles.\"",
  },
  {
    title: "For professionals who want mental Stimulation",
    text: "\"Upgrade your coffee breaks — PUZZLE GUARD swaps routine app-checks for quick puzzles that keep your mind sharp.\"",
  },
  {
    title: "For gamers who love challenges",
    text: "\"Unlock your apps like achievements — PUZZLE GUARD makes each quiz or puzzle a mini-quest before your favorite apps.\"",
  },
  {
    title: "For lifelong learners of everything",
    text: "\"Never stop discovering — for curious minds who want to learn something new every day, there's always a new challenge waiting.\"",
  },
];

export default function HomeSection3() {
  const [current, setCurrent] = useState(0);
  const count = slides.length;
  const prev = () => setCurrent((c) => (c - 1 + count) % count);
  const next = () => setCurrent((c) => (c + 1) % count);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#1A2942] to-[#0F1E35]">
      {/* Зелена лінія-роздільник зверху секції */}
      <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#60EEB2,transparent)]" />

      {/* Декоративне коло-фото (справа вгорі) — можна прибрати, якщо не треба */}
      <img
        src={circlePhoto}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-24 hidden h-[178px] w-[178px] rounded-full object-cover opacity-90 2xl:block"
      />

      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-16 lg:py-24">
        {/* Заголовок */}
        <h2 className="text-center font-mooli text-4xl text-white lg:text-[64px]">
          Who is Puzzle Guard really for?
        </h2>

        {/* Слайдер */}
        <div className="relative mx-auto mt-12 max-w-[1027px] lg:mt-16">
          {/* Стрілки */}
          <button
            type="button"
            onClick={prev}
            aria-label="Попередній"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-white/80 transition-colors hover:text-white sm:left-4 lg:left-6"
          >
            <Chevron dir="left" className="h-8 w-8 lg:h-12 lg:w-12" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Наступний"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-white/80 transition-colors hover:text-white sm:right-4 lg:right-6"
          >
            <Chevron dir="right" className="h-8 w-8 lg:h-12 lg:w-12" />
          </button>

          {/* Картка-слайд */}
          <div className="grid rounded-[40px] bg-gradient-to-br from-[#1E5A50] to-[#287864] lg:rounded-[95px]">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`col-start-1 row-start-1 flex flex-col items-center justify-center p-8 px-14 text-center transition-opacity duration-300 lg:p-16 lg:px-24 ${
                  i === current ? "opacity-100" : "invisible opacity-0"
                }`}
              >
                <h3 className="font-mooli text-2xl text-white lg:text-[64px]">
                  {s.title}
                </h3>
                <p className="mt-6 font-mooli text-lg leading-relaxed text-white lg:mt-10 lg:text-[48px]">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Слайд ${i + 1}`}
              className={`h-4 w-4 rounded-full transition-colors ${
                i === current ? "bg-[#60EEB2]" : "bg-[#60EEB2]/30"
              }`}
            />
          ))}
        </div>

        {/* Нижнє фото (заокруглене, обрізане маскою) */}
        <div className="mx-auto mt-16 max-w-[1036px] overflow-hidden rounded-[40px] lg:rounded-[95px]">
          <img src={sliderPhoto} alt="PuzzleGuard users" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
