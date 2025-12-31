import Image from "next/image";
import Banner from "./components/Banner";
import CateringHero from "./components/CateringHero";
import Sol from "./components/Sol";
import Testimonial from "./components/Testimonal";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <CateringHero />

      <Sol />
      <Testimonial />
    </>
  );
}
