'use client'
import { use } from "react";
import { useState } from "react";
// import Nav from "@/components/Navbar/Nav";
// import { useCart } from "@/components/Cart/CartContext";
import Image from "next/image";
import MainNav from "../../../../components/layout/Navbar/MainNavbar"
import Footer from "../../../../components/layout/Footer"
import TransButton from "../../../../components/ui/TransButton";
import Review from "../../../../components/Review"
import { cosmeticsProducts } from "../../../../data/products/cosmetics"


export default function Page({ params }) {
    const { id } = use(params);

    // const { addToCart } = useCart();


    const product = cosmeticsProducts.find(
        (p) => p.id === Number(id)
    );


    if (!product) {
        return <div>Product not found</div>;
    }

    const { Img, title, smallImgs, hoverImg } = product;

    const [mainImg, setImg] = useState(Img);

    return (
        <>
            {/* <Nav /> */}

            <MainNav />

            <div className="flex flex-col lg:flex-row justify-center items-center max-w-[1400px] w-full mx-auto h-auto lg:h-[800px] gap-3 sm:gap-10 pt-[100px] sm:pt-[130px] lg:pt-[250px] px-4">

                <div className="relative w-full sm:w-[500px] lg:w-[650px] h-[420px] sm:h-[600px] lg:h-[800px] rounded-xl">

                    <Image src={mainImg}
                        alt="prod"
                        fill
                        className="absolute h-full w-full object-cover rounded-t-lg transition-opacity duration-200 hover:opacity-0" />

                    <Image src={hoverImg}
                        alt="hovImg"
                        fill
                        className="absolute top-0 left-0 h-full w-full object-cover rounded-t-lg opacity-0 transition-opacity duration-200 hover:opacity-100" />
                </div>

                <div className="w-full sm:w-[500px] lg:w-[650px] h-auto flex flex-col text-left p-5 sm:p-8 lg:p-10">

                    <div className="flex justify-between">
                        <p className="text-2xl sm:text-3xl font-semibold">
                            {title}
                        </p>

                        <p className="font-bold text-2xl cursor-pointer">
                            <i className="fa-regular fa-heart"></i>
                        </p>
                    </div>

                    <p className="mt-3 font grey">
                        7.9 fl oz | woody gourmand
                    </p>

                    <div className="flex gap-1 cursor-pointer mt-4">
                        {smallImgs.map((img, index) => (

                            <Image key={index}
                                src={img}
                                alt="smallImage"
                                width={40}
                                height={40}
                                onClick={() => setImg(img)}
                                className="w-[45px] h-[45px] object-cover" />
                        ))}
                    </div>

                    <div className="flex mt-5 gap-1">
                        <p><i className="fa-solid fa-star"></i></p>
                        <p><i className="fa-solid fa-star"></i></p>
                        <p><i className="fa-solid fa-star"></i></p>
                        <p><i className="fa-solid fa-star"></i></p>
                        <p><i className="fa-regular fa-star"></i></p>
                        <p className="grey">(21) Reviews</p>
                    </div>

                    <div className="flex justify-center items-center mt-5">
                        <TransButton
                            onClick={() => addToCart(product)}
                            text={"add to cart"}
                            width="w-[600px]"
                        />
                    </div>

                    <div className="mt-5">
                        <h1 className="dark-pink font-medium text-xl">details</h1>
                        <p className="grey mt-2">
                            velvety, warm, decadent...
                        </p>

                        <h2 className="dark-pink font-medium text-xl mt-5">
                            key notes:
                        </h2>

                        <div className="grey p-3">
                            <p>- opening: bergamot and chantilly accord</p>
                            <p>- heart: chocolate cream accord</p>
                            <p>- base: vanilla and woody amber</p>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h1 className="dark-pink font-medium text-xl">
                            ingredients
                        </h1>

                        <div className="flex justify-center items-center gap-5 mt-5">

                            <Image src="/vegan.webp" alt="vegan" width={40}
                                height={40} />
                            <Image src="/cruelty.webp" alt="cruelty" width={40}
                                height={40} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 sm:mt-4 lg:mt-50">
                <Review />
            </div>

            <Footer />
        </>
    );
}