// Стрілка для кнопки (formkit:arrowright) — вектор із Figma
function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 45 25" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill="currentColor"
        d="M 34.72 13.89 L 9.72 13.89 C 8.94 13.89 8.33 13.28 8.33 12.5 C 8.33 11.72 8.94 11.11 9.72 11.11 L 34.72 11.11 C 35.5 11.11 36.11 11.72 36.11 12.5 C 36.11 13.28 35.5 13.89 34.72 13.89 Z M 27.78 23.61 C 27.6 23.61 27.42 23.58 27.25 23.51 C 27.08 23.43 26.93 23.33 26.81 23.19 C 26.25 22.64 26.25 21.78 26.81 21.22 L 35.56 12.47 L 26.81 3.72 C 26.25 3.17 26.25 2.31 26.81 1.75 C 27.36 1.19 28.22 1.19 28.78 1.75 L 38.5 11.47 C 39.06 12.03 39.06 12.89 38.5 13.44 L 28.78 23.17 C 28.5 23.44 28.14 23.58 27.81 23.58 L 27.78 23.61 Z"
      />
    </svg>
  );
}

// Дані карток. Щоб додати/змінити картку — правиш лише цей масив, розмітку чіпати не треба.
const cards = [
  {
    title: "Geography Challenges",
    text: "Travel the world while learning countries, capitals, rivers, and mountains. Every day brings a new adventure!",
    gradient: "from-[#283C78]/20 to-[#3C5096]/30",
  },
  {
    title: "Logic Riddles",
    text: "Train your brain with creative challenges that develop critical thinking skills.",
    gradient: "from-[#1E5A50]/20 to-[#287864]/30",
  },
  {
    title: "Adaptive Difficulty",
    text: "Smart algorithms adjust puzzle difficulty based on your performance, ensuring you're always challenged but never overwhelmed.",
    gradient: "from-[#1E5A50]/20 to-[#287864]/30",
  },
  {
    title: "Math Puzzles",
    text: "Develop logical thinking with engaging problems of varying difficulty levels.",
    gradient: "from-[#283C78]/20 to-[#3C5096]/30",
  },
];

export default function HomeSection2() {
  return (
    <section className="relative bg-gradient-to-b from-[#0A1628] via-[#17325B] to-[#0A1628]">
      {/* Зелена лінія-роздільник зверху секції */}
      <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#60EEB2,transparent)]" />

      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-16 lg:py-24">
        {/* Заголовок секції */}
        <h2 className="text-center font-mooli text-4xl lg:text-[64px]">
          <span className="text-[#A0C3EC]">What do </span>
          <span className="bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] bg-clip-text text-transparent">
            we offer?
          </span>
        </h2>

        {/* Сітка 2×2 */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:gap-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[25px] bg-gradient-to-br ${card.gradient} p-8 lg:p-12`}
            >
              <h3 className="font-mooli text-3xl text-[#D3CBEA] lg:text-[40px]">
                {card.title}
              </h3>
              <p className="mt-6 font-mooli text-lg leading-relaxed text-white lg:text-[26px]">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Кнопка Learn more */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <button
            type="button"
            className="flex items-center gap-3 rounded-[35px] bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] px-8 py-3 font-mooli text-xl text-[#0B1020] transition-opacity hover:opacity-90 lg:text-2xl"
          >
            Learn more
            <ArrowIcon className="h-5 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
