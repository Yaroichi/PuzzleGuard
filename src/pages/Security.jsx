export default function Security() {
  return (
    <section className="mx-auto max-w-[900px] px-5 py-16 md:px-8 lg:px-16 lg:py-24">
      <h1 className="font-mooli text-4xl text-white lg:text-[56px]">Security</h1>

      <p className="mt-8 font-mooli text-base leading-relaxed text-[#A7B3D2] lg:text-xl">
        Keeping your account and your data safe is a priority for us. Here is
        how we protect them.
      </p>

      <h2 className="mt-10 font-mooli text-2xl text-[#60EEB2] lg:text-3xl">
        Encrypted connection
      </h2>
      <p className="mt-4 font-mooli text-base leading-relaxed text-[#A7B3D2] lg:text-xl">
        All traffic between your device and our servers is encrypted, so nobody
        can read it along the way.
      </p>

      <h2 className="mt-10 font-mooli text-2xl text-[#60EEB2] lg:text-3xl">
        Account protection
      </h2>
      <p className="mt-4 font-mooli text-base leading-relaxed text-[#A7B3D2] lg:text-xl">
        Passwords are stored in hashed form and are never visible to us. We
        recommend using a unique password for your Puzzle Guard account.
      </p>

      <h2 className="mt-10 font-mooli text-2xl text-[#60EEB2] lg:text-3xl">
        Reporting an issue
      </h2>
      <p className="mt-4 font-mooli text-base leading-relaxed text-[#A7B3D2] lg:text-xl">
        Found a vulnerability? Please contact our support team with the details.
        We review every report and fix confirmed issues as quickly as possible.
      </p>
    </section>
  );
}
