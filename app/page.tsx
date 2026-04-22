import HeroImage from "../components/HeroImage";
import { Cosmic, Lipsticks, Limited, Bag, Blogger } from "@/components/banners";
import NavSwitcher from "../components/layout/Navbar/NavSwitcher";
import Footer from "../components/layout/Footer";
import Category from "@/components/Category";
import FirstFeatured from "../components/Featured/FirstFeatured";
import SecFeatured from "@/components/Featured/SecFeatured";

export default function Home() {
  return (
    <div>
      <NavSwitcher />

      <HeroImage />

      <div className="mt-80 sm:mt-0">
        <Category />
      </div>

      <div className="block sm:hidden mt-20">
        <Cosmic />
      </div>

      <div className="mt-20">
        <FirstFeatured />
      </div>

      <div className="hidden sm:block mt-20">
        <Cosmic />
      </div>

      <Blogger />

      <div className="mt-20">
        <Lipsticks />
      </div>

      <div className="block sm:hidden">
        <SecFeatured />
      </div>

      <Bag />

      <div className="hidden sm:block">
        <SecFeatured />
      </div>

      <div className="mt-20">
        <Limited />
      </div>

      <div className="mt-80 lg:mt-40 sm:mt-30">
        <Footer />
      </div>
    </div>
  );
}
