import banner1 from '../assets/banner/1.png'
import banner2 from '../assets/banner/2.png'
import banner3 from '../assets/banner/3.png'
import user from '../assets/banner/user.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const Banner = () => {
    return (
        <div className="   mt-14">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-3/5 lg:w-2/5 ">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide> <img src={banner2} alt="" />
                            <div className='flex justify-between w-3/5 text-white p-3 bg-[rgba(255, 255, 255, 0.20)] backdrop-blur-xl absolute top-80 left-10 '>
                                <div>
                                    <p>Current Bid</p>
                                    <p>0.25 ETH</p>
                                </div>
                                <div>
                                    <p>Ends in</p>
                                    <p>12h 43m 42s</p>
                                </div>
                            </div>
                            <div className='flex justify-between w-3/5 text-white p-3 bg-[rgba(255, 255, 255, 0.20)] backdrop-blur-xl absolute top-10 left-10 '>
                                <div>
                                    <h3>Abstr Gradient NFT</h3>
                                    <div className='flex'>
                                        <img src={user} alt="" />
                                        <p className='ml-4'>Arkhan17</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> <img src={banner1} alt="" />
                            <div className='flex justify-between w-3/5 text-white p-3 bg-[rgba(255, 255, 255, 0.20)] backdrop-blur-xl absolute top-80 left-10 '>
                                <div>
                                    <p>Current Bid</p>
                                    <p>0.25 ETH</p>
                                </div>
                                <div>
                                    <p>Ends in</p>
                                    <p>12h 43m 42s</p>
                                </div>
                            </div>
                            <div className='flex justify-between w-3/5 text-white p-3 bg-[rgba(255, 255, 255, 0.20)] backdrop-blur-xl absolute top-10 left-10 '>
                                <div>
                                    <h3>Abstr Gradient NFT</h3>
                                    <div className='flex'>
                                        <img src={user} alt="" />
                                        <p className='ml-4'>Arkhan17</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> <img src={banner3} alt="" />
                            <div className='flex justify-between w-3/5 text-white p-3 bg-[rgba(255, 255, 255, 0.20)] backdrop-blur-xl absolute top-80 left-10 '>
                                <div>
                                    <p>Current Bid</p>
                                    <p>0.25 ETH</p>
                                </div>
                                <div>
                                    <p>Ends in</p>
                                    <p>12h 43m 42s</p>
                                </div>
                            </div>
                            <div className='flex justify-between w-3/5 text-white p-3 bg-[rgba(255, 255, 255, 0.20)] backdrop-blur-xl absolute top-10 left-10 '>
                                <div>
                                    <h3>Abstr Gradient NFT</h3>
                                    <div className='flex'>
                                        <img src={user} alt="" />
                                        <p className='ml-4'>Arkhan17</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
                <div className="w-3/5 text-left justify-start	">
                    <h1 className="text-5xl font-bold text-black">Discover, and collect <br /> Digital Art  NFTS </h1>
                    <p className="py-6">Digital marketplace for crypto collectibles and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.</p>
                    <button className="btn  bg-[#3D00B7] text-white px-10 py-5">Explore Now</button>
                    <div className="mt-8 flex mr-4 text-black">
                        <div >
                            <h1 className="text-5xl font-bold mr-6">98K+</h1>
                            <p>Auction</p>
                        </div>
                        <div >
                            <h1 className="text-5xl font-bold mr-6">12K+</h1>
                            <p>Artwork</p>
                        </div>
                        <div >
                            <h1 className="text-5xl font-bold mr-6">15K+</h1>
                            <p>Artist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;