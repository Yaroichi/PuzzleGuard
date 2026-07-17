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

// Дані карток. Іконки — назви з Iconify (ті самі, що в макеті).
const cards = [
  {
    icon: "fluent-emoji-flat:brain",
    iconColor: null, // ця іконка кольорова сама по собі
    title: "Transform Screen Time into Brain Time",
    subtitle:
      "Instead of mindlessly opening apps, you'll engage your mind with educational challenges. Every app launch becomes an opportunity to learn something new and develop your cognitive skills.",
    features: [
      "Build knowledge while waiting for apps to load",
      "Strengthen memory and recall abilities",
      "Improve concentration and focus",
      "Make every interaction meaningful",
    ],
  },
  {
    icon: "mdi:thunder",
    iconColor: "#F5793A",
    title: "Build Better Digital Habits",
    subtitle:
      "Puzzle Guard creates a mindful pause before accessing your apps. This brief moment helps you become more intentional about your screen time and reduces impulsive app usage that leads to endless scrolling.",
    features: [
      "Break the cycle of mindless scrolling",
      "Develop awareness of digital consumption",
      "Create healthy boundaries with technology",
      "Reduce app addiction naturally",
    ],
  },
  {
    icon: "dashicons:welcome-learn-more",
    iconColor: "#8B6FC0",
    title: "Learn While You Browse",
    subtitle:
      "Master geography facts, sharpen your math skills, and enhance logical thinking — all integrated seamlessly into your daily routine. No extra study time needed! Learning becomes a natural part of your digital life.",
    features: [
      "Accumulate knowledge effortlessly over time",
      "Practice skills in short, manageable sessions",
      "Track your learning progress automatically",
      "Turn wasted time into educational moments",
    ],
  },
  {
    icon: "solar:gamepad-bold",
    iconColor: "#8B6FC0",
    title: "Gamified Experience",
    subtitle:
      "Each puzzle is a mini-challenge that makes accessing your apps feel like unlocking achievements. Track your progress, build streaks, and compete with yourself to improve. It's productivity meets entertainment!",
    features: [
      "Earn badges and achievements for consistency",
      "Build daily streaks to stay motivated",
      "Unlock advanced difficulty levels",
      "See your improvement with detailed statistics",
    ],
  },
];

export default function GuideSection1() {
  return (
    <section className="bg-gradient-to-b from-[#0A1628] via-[#0F1E35] to-[#0A1628]">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-16 lg:py-24">
        {/* Заголовок + підзаголовок */}
        <h1 className="text-center font-mooli text-4xl text-white lg:text-[64px]">
          Why Puzzle Guard?
        </h1>
        <p className="mx-auto mt-6 max-w-[1182px] text-center font-mooli text-lg text-[#B9BDC4] lg:text-[36px]">
          Transform your digital habits with intelligent challenges that make
          screen time productive and purposeful
        </p>

        {/* Картки (стовпчиком) */}
        <div className="mt-12 flex flex-col gap-10 lg:mt-16 lg:gap-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[25px] border border-[#60EEB2]/10 bg-white/[0.03] p-8 lg:p-12"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                {/* Іконка */}
                <Icon
                  icon={card.icon}
                  color={card.iconColor || undefined}
                  className="h-16 w-16 shrink-0 lg:h-20 lg:w-20"
                />

                {/* Контент картки */}
                <div className="flex-1">
                  <h2 className="font-mooli text-3xl text-[#60EEB2] lg:text-[48px]">
                    {card.title}
                  </h2>
                  <p className="mt-4 font-mooli text-lg text-white lg:text-[32px]">
                    {card.subtitle}
                  </p>

                  <ul className="mt-8 flex flex-col gap-4">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4">
                        <CheckIcon className="h-6 w-6 shrink-0 text-[#60EEB2]" />
                        <span className="font-mooli text-base text-white lg:text-[32px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
