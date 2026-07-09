import HomeHeader from "../components/HomeHeader";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeSection1 />
      <HomeSection2 />
      {/* далі Section 1, Section 2 ... */}
    </>
  );
}