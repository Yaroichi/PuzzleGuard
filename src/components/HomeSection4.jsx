// Зелена галочка перед пунктом
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

// Дані тарифів. Щоб змінити ціну, пункти чи додати план — правиш лише цей масив.
const plans = [
  {
    name: "Free",
    subtitle: "Try the basics - no credit card.",
    price: "0$",
    features: ["5 puzzles per day", "Basic hints", "Progress analytics"],
    highlighted: false,
    gradient: "from-[#334B6C] via-[#2B5260] to-[#245A54]",
  },
  {
    name: "Pro",
    subtitle: "Everything to build a daily habit.",
    price: "9$",
    features: [
      "Unlimited puzzles",
      "Smart hints & solutions",
      "Progress analytics",
      "Daily streak rewards",
    ],
    highlighted: true,
    gradient: "from-[#368774] via-[#417787] to-[#4A6699]",
  },
  {
    name: "Premium",
    subtitle: "For power users and teams.",
    price: "19$",
    features: [
      "All Pro features",
      "Custom challenges",
      "Priority support",
      "Team management",
    ],
    highlighted: false,
    gradient: "from-[#334B6C] via-[#2B5260] to-[#245A54]",
  },
];

export default function HomeSection4() {
  return (
    <section id="subscriptions" className="relative bg-gradient-to-b from-[#0A1628] via-[#1A2942] to-[#0F1E35]">
      {/* Зелена лінія-роздільник зверху секції */}
      <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#60EEB2,transparent)]" />

      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-16 lg:py-24">
        {/* Заголовок — градієнт */}
        <h2 className="text-center font-mooli text-4xl text-transparent lg:text-[64px]">
          <span className="text-[#FFFFFF]">Sub</span>
          <span className="bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] bg-clip-text text-transparent">
          scriptions
          </span>
        </h2>

        {/* Сітка тарифів */}
        <div className="mx-auto mt-12 grid max-w-[1288px] grid-cols-1 gap-8 md:grid-cols-3 lg:mt-16 lg:gap-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[30px] bg-gradient-to-b ${plan.gradient} p-8`}
            >
              {/* Бейдж для виділеного тарифу */}
              {plan.highlighted && (
                <span className="absolute right-6 top-6 rounded-[30px] bg-gradient-to-r from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] px-4 py-1.5 text-xs font-medium text-black">
                  Most popular
                </span>
              )}

              {/* Назва тарифу */}
              <h3 className="font-mooli text-xl text-white">{plan.name}</h3>

              {/* Підзаголовок */}
              <p className="mt-4 font-mooli text-2xl text-[#A7B3D2]">
                {plan.subtitle}
              </p>

              {/* Ціна */}
              <div className="mt-6 flex items-end gap-1">
                <span className="font-mooli text-4xl text-white">{plan.price}</span>
                <span className="mb-2 font-mooli text-sm text-[#A7B3D2]">/month</span>
              </div>

              {/* Пункти з галочками */}
              <ul className="mt-8 flex flex-col gap-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#60EEB2]" />
                    <span className="font-mooli text-white">{feature}</span>
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
