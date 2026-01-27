import Image from "next/image";
import Banner from "./component/Banner";
import CateringHero from "./component/CateringHero";
import Sol from "./component/Sol";
import Testimonial from "./component/Testimonal";

export default function Home() {
  return (
    <>
      <Banner />
      <CateringHero />
      <Sol />
      <Testimonial />
    </>
  );
}
