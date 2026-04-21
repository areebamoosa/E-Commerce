import HeroImage from "../components/HeroImage";
import {
  Cosmic,
  Lipsticks,
  Limited,
  Bag,
  Blogger,
} from "@/components/banners";

import MainNavbar from "../components/layout/Navbar/MainNavbar";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <MainNavbar/>
      <HeroImage />
      <Cosmic />
      <Lipsticks />
      <Limited />
      <Bag />
      <Blogger />
      <Footer/>
    </div>
  );
}
