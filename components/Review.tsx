'use client'

import TransButton from "./ui/TransButton"

const Review = () => {
    return (
        <>
            <section className='light-pink'>
                <div className='flex justify-center items-center flex-col p-10 gap-5'>
                    <h1 className='headFont dark-pink text-xl sm:text-2xl lg:text-3xl'>REVIEWS</h1>
                    <div className='flex mt-2 gap-1'>
                        <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                        <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                        <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                        <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                        <p style={{ color: "#9b6d75", }}><i className="fa-regular fa-star"></i> </p>
                        <p className='grey'>(21)</p>
                    </div>

                    <div className='mt-1'>
                        <TransButton text={"write a review"} width="w-[150px]" />
                    </div>
                    <div>
                        <div className="w-full max-w-[1000px]">

                            <div className='flex  gap-1 text-xs'>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                            </div>
                            <p className=' dark-pink font-semibold mt-1 text-base sm:text-xl '><i>Sweet Yummy Scent</i></p>
                            <p className='grey mt-1'>Fell in love with the scent, feels amazingly fresh</p>
                            <p className='grey mt-3'>10/20/2025</p>
                            <div className='grey flex gap-2 font '>
                                <p>Yolanda</p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-square-check"></i></p>
                                <p>Verified Purchaser</p>
                            </div>
                            <div className='flex gap-4 mt-3'>
                                <div className='flex gap-1'>
                                    <p>0</p>
                                    <p><i className="fa-regular fa-thumbs-up"></i></p>
                                </div>
                                <div className='flex gap-1'>
                                    <p>0</p>
                                    <p><i className="fa-regular fa-thumbs-down"></i></p>
                                </div>
                            </div>
                        </div>
                        <hr className='dark-pink mt-6' />
                        <div className="w-full max-w-[1000px]">

                            <div className='flex mt-5 gap-1 text-xs '>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                            </div>
                            <p className=' dark-pink font-semibold mt-1 text-base sm:text-xl '><i>Very nice smell. I would buy for girlfriend</i></p>
                            <p className='grey mt-1'>This smell was very nice. Lasted a good amount through the day. Not too sweet or sickening. Would recommend and buy again</p>
                            <p className='grey mt-3'>10/20/2025</p>
                            <div className='grey flex gap-2 font '>
                                <p>Michael</p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-square-check"></i></p>
                                <p>Verified Purchaser</p>
                            </div>
                            <div className='flex gap-4 mt-3'>
                                <div className='flex gap-1'>
                                    <p>0</p>
                                    <p><i className="fa-regular fa-thumbs-up"></i></p>
                                </div>
                                <div className='flex gap-1'>
                                    <p>0</p>
                                    <p><i className="fa-regular fa-thumbs-down"></i></p>
                                </div>
                            </div>
                        </div>
                        <hr className='dark-pink mt-6' />
                        <div className="w-full max-w-[1000px]">

                            <div className='flex mt-5 gap-1 text-xs'>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-star"></i> </p>
                            </div>
                            <p className=' dark-pink font-semibold mt-1 text-base sm:text-xl '><i>Nice scent</i></p>
                            <p className='grey mt-1'>I love the scent, it smells so good and lasts all day, love it!</p>
                            <p className='grey mt-3'>10/20/2025</p>
                            <div className='grey flex gap-2 font '>
                                <p>Alicia</p>
                                <p style={{ color: "#9b6d75", }}><i className="fa-solid fa-square-check"></i></p>
                                <p>Verified Purchaser</p>
                            </div>
                            <div className='flex gap-4 mt-3'>
                                <div className='flex gap-1'>
                                    <p>0</p>
                                    <p><i className="fa-regular fa-thumbs-up"></i></p>
                                </div>
                                <div className='flex gap-1'>
                                    <p>0</p>
                                    <p><i className="fa-regular fa-thumbs-down"></i></p>
                                </div>
                            </div>
                        </div>
                        <hr className='dark-pink mt-6' />
                    </div>
                    <h1 className='grey'>4 / 21 reviews</h1>
                    <div className='mt-[-5px]'>
                        <TransButton text={"load more"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review