export default function Cookies() {
  return (
    <section className="mx-auto max-w-[900px] px-5 py-16 md:px-8 lg:px-16 lg:py-24">
      <h1 className="font-mooli text-4xl text-white lg:text-[56px]">
        Cookie Settings
      </h1>

      <p className="mt-8 font-mooli text-base leading-relaxed text-[#A7B3D2] lg:text-xl">
        Cookies are small files stored in your browser. We use them to keep the
        site working properly and to understand how it is used.
      </p>

      <h2 className="mt-10 font-mooli text-2xl text-[#60EEB2] lg:text-3xl">
        Essential cookies
      </h2>
      <p className="mt-4 font-mooli text-base leading-relaxed text-[#A7B3D2] lg:text-xl">
        Required for the site to function — they remember your session and your
        preferences. These cannot be turned off.
      </p>

      <h2 className="mt-10 font-mooli text-2xl text-[#60EEB2] lg:text-3xl">
        Analytics cookies
      </h2>
      <p className="mt-4 font-mooli text-base leading-relaxed text-[#A7B3D2] lg:text-xl">
        Help us see which pages are popular and where people get stuck, so we
        can improve Puzzle Guard. They are optional.
      </p>

      <h2 className="mt-10 font-mooli text-2xl text-[#60EEB2] lg:text-3xl">
        Managing cookies
      </h2>
      <p className="mt-4 font-mooli text-base leading-relaxed text-[#A7B3D2] lg:text-xl">
        You can clear or block cookies in your browser settings at any time.
        Note that blocking essential cookies may break parts of the site.
      </p>
    </section>
  );
}
