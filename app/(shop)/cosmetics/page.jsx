// import NavSwitcher from "@/app/components/Navbar/NavSwitcher";

import Image from "next/image";
import MainNav from "../../../components/layout/Navbar/MainNavbar"
import Footer from "../../../components/layout/Footer"
import ProductGrid from "../../../components/product/ProductGrid"
import { cosmeticsProducts } from "../../../data/products/cosmetics"

export default function CosmeticsPage() {
    return (
        <>
            {/* <NavSwitcher /> */}
            <MainNav />

            {/* HERO */}
            <div className="relative w-full h-[250px] sm:h-[550px] overflow-hidden">
                <Image src="/Red.jpeg" alt="red" fill className="w-full h-full object-cover" />
            </div>

            <div className="mt-10">
                <ProductGrid products={cosmeticsProducts} />
            </div>

            <Footer />
        </>
    );
}