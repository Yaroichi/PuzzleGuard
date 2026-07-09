import homeSection1Img from "../assets/HomeSection1.png";

export default function HomeSection1() {
  return (
    <section className="relative bg-gradient-to-b from-[#0A1628] via-[#1A2942] to-[#0F1E35]">
      {/* Зелена лінія-роздільник зверху секції */}
      <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#60EEB2,transparent)]" />

      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-16 lg:py-24">
        {/* Заголовок секції (над карткою): перший рядок білий, другий — градієнт */}
        <h2 className="text-center font-mooli text-4xl leading-tight lg:text-[64px]">
          <span className="text-white">PUZZLE GUARD</span>
          <br />
          <span className="bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] bg-clip-text text-transparent">
            What is it?
          </span>
        </h2>

        {/* Картка-фон під контентом: #3B4AB2 з прозорістю 37%, заокруглення 30px */}
        <div className="mt-12 rounded-[30px] bg-[#3B4AB2]/[0.37] p-6 md:p-12 lg:mt-16 lg:p-20">
          {/* Дві колонки: зліва текст + кнопка, справа картинка */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Ліва колонка */}
            <div className="flex flex-col">
              <h3 className="font-sans text-4xl text-white lg:text-[60px]">
                What it’s purpose?
              </h3>
              <p className="mt-6 font-sans text-xl leading-relaxed text-white lg:text-[36px] lg:leading-snug">
                Who says opening apps has to be boring? Crack a mini geography,
                math, or logic puzzle first – then enjoy your favorite program!
              </p>
              <button
                type="button"
                className="mt-10 w-fit rounded-[35px] bg-gradient-to-br from-[#4CE1AE] via-[#65C1DB] to-[#75ADF7] px-10 py-4 font-mooli text-2xl text-[#0B1020] transition-opacity hover:opacity-90 lg:text-[32px]"
              >
                Find out more
              </button>
            </div>

            {/* Права колонка — картинка */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={homeSection1Img}
                alt="PuzzleGuard preview"
                className="w-full max-w-[580px] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
