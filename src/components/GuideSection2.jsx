import { Icon } from "@iconify/react";

// Зелена галочка
function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 8.5l5 5 11-11.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cards = [
  {
    icon: "tdesign:numbers-circle-1",
    title: "Geography Challenges",
    subtitle:
      "Embark on a global journey of discovery. Our geography challenges help you master world knowledge through engaging, bite-sized questions.",
    label: "What you’ll learn:",
    features: [
      "Capitals and countries",
      "Flags and national symbols",
      "Famous landmarks and wonders",
      "Continents, maps and borders",
    ],
  },
  {
    icon: "tdesign:numbers-circle-2",
    title: "Math Puzzles",
    subtitle:
      "Sharpen your numerical skills with varied mathematical challenges that range from basic arithmetic to complex problem-solving.",
    label: "What you’ll practice:",
    features: [
      "Mental arithmetic and speed",
      "Algebra and equations",
      "Logic and number sequences",
      "Geometry and spatial reasoning",
    ],
  },
  {
    icon: "tdesign:numbers-circle-3",
    title: "Logic Riddles",
    subtitle:
      "Put your reasoning to the test with creative riddles and brain teasers that develop critical thinking, deduction and lateral problem-solving.",
    label: "What you’ll develop:",
    features: [
      "Pattern recognition",
      "Deductive reasoning",
      "Lateral and creative thinking",
      "Smart problem-solving strategies",
    ],
  },
  {
    icon: "tdesign:numbers-circle-4",
    title: "Adaptive Difficulty",
    subtitle:
      "Smart algorithms tune every puzzle to your skill level, analyzing your performance so you’re always challenged but never overwhelmed.",
    label: "What you’ll get:",
    features: [
      "Personalized difficulty curve",
      "Real-time performance tracking",
      "Balanced challenge and comfort",
      "Steady, motivating progress",
    ],
  },
];

export default function GuideSection2() {
  return (
    <section className="bg-gradient-to-b from-[#0A1628] via-[#0F1E35] to-[#0A1628]">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-16 lg:py-24">
        {/* Заголовок + підзаголовок */}
        <h2 className="text-center font-mooli text-4xl text-white lg:text-[64px]">
          Explore All Features
        </h2>
        <p className="mx-auto mt-6 max-w-[1182px] text-center font-mooli text-lg text-[#B9BDC4] lg:text-[36px]">
          Discover our comprehensive puzzle categories designed to challenge and
          educate you
        </p>

        {/* Сітка 2×2 */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:gap-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[25px] border border-[#60EEB2]/10 bg-white/[0.03] p-8 lg:p-10"
            >
              {/* Заголовок картки з нумерованою іконкою */}
              <div className="flex items-center gap-4">
                <Icon
                  icon={card.icon}
                  className="h-11 w-11 shrink-0 text-[#60EEB2]"
                />
                <h3 className="font-mooli text-2xl text-white lg:text-[36px]">
                  {card.title}
                </h3>
              </div>

              {/* Опис */}
              <p className="mt-6 font-mooli text-base text-white lg:text-[28px]">
                {card.subtitle}
              </p>

              {/* Зелений підзаголовок */}
              <p className="mt-6 font-mooli text-xl text-[#60EEB2] lg:text-[32px]">
                {card.label}
              </p>

              {/* Пункти */}
              <ul className="mt-4 flex flex-col gap-3">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4">
                    <CheckIcon className="h-6 w-6 shrink-0 text-[#60EEB2]" />
                    <span className="font-mooli text-base text-white lg:text-[28px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
