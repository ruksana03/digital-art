import bigImg from '../assets/collection/bigImg.png'
import midPhoto1 from '../assets/collection/midPhoto1.png'
import midPhoto2 from '../assets/collection/midPhoto2.png'
import midPhoto3 from '../assets/collection/midPhoto3.png'
import user from '../assets/collection/user.png'
import icon from '../assets/collection/icon.svg'
import greenIcon from '../assets/category/greenIcon.svg'
import collection1 from '../assets/collection/collection1.png'
import collection2 from '../assets/collection/collection2.png'
import collection3 from '../assets/collection/collection3.png'
import collection4 from '../assets/collection/collection4.png'
import collection5 from '../assets/collection/collection5.png'
import verify from '../assets/collection/verify.svg'

const Collection = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 sm:gap-10 md:gap-10  lg:mb-10 md:mb-10 sm:mb-10 ">
            <div>
                <img src={bigImg} alt="" />
                <div className='mt-4 flex justify-between'>
                    <div className='flex'>
                        <img src={user} alt="" className='mr-4 ' />
                        <div className='text-left'>
                            <h3 className='text-lg font-bold'>The Futr Abstr</h3>
                            <p>10 in the stock</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm'>Highest Bid</p>
                        <div className='flex'>
                            <img src={icon} alt="" className='mr-4' />
                            <span className='font-bold'>0.25 ETH</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <div className='flex '>
                    <img src={midPhoto1} alt="" />
                    <div className='flex flex-col items-start space-y-3 ml-3'>
                        <h3 className='text-lg font-bold'>The Futr Abstr</h3>
                        <div className='flex gap-2 items-center'>
                            <img src={user} alt="" className='w-9 h-9' />
                            <button className="btn btn-outline btn-success btn-xs"><img src={greenIcon} alt="" className='w-2 h-3.5' />0.25 ETH</button>
                            <span>1 of 8</span>
                        </div>
                        <button className="btn btn-outline btn-sm  border-[#3D00B7] text-[#3D00B7] hover:bg-[#3D00B7]  ">Place a bid</button>
                    </div>
                </div>
                <div className='flex '>
                    <img src={midPhoto2} alt="" />
                    <div className='flex flex-col items-start space-y-3 ml-3'>
                        <h3 className='text-lg font-bold'>The Futr Abstr</h3>
                        <div className='flex gap-2 items-center'>
                            <img src={user} alt="" className='w-9 h-9' />
                            <button className="btn btn-outline btn-success btn-xs"><img src={greenIcon} alt="" className='w-2 h-3.5' />0.25 ETH</button>
                            <span>1 of 8</span>
                        </div>
                        <button className="btn btn-outline btn-sm  border-[#3D00B7] text-[#3D00B7] hover:bg-[#3D00B7]  ">Place a bid</button>
                    </div>
                </div>
                <div className='flex '>
                    <img src={midPhoto3} alt="" />
                    <div className='flex flex-col items-start space-y-3 ml-3'>
                        <h3 className='text-lg font-bold'>The Futr Abstr</h3>
                        <div className='flex gap-2 items-center'>
                            <img src={user} alt="" className='w-9 h-9' />
                            <button className="btn btn-outline btn-success btn-xs"><img src={greenIcon} alt="" className='w-2 h-3.5' />0.25 ETH</button>
                            <span>1 of 8</span>
                        </div>
                        <button className="btn btn-outline btn-sm  border-[#3D00B7] text-[#3D00B7] hover:bg-[#3D00B7]  ">Place a bid</button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='uppercase text-2xl font-extrabold text-left'>Top collections ever</h3>
                <p className='text-[#3D00B7] text-left'>Last 7 days</p>
                <div className='mt-8 space-y-5'>
                    <div className='flex items-center space-x-5'>
                        <h1 className='font-bold text-lg'>1</h1>
                        <div className='relative'>
                            <img src={collection1} alt="" />
                            <img src={verify} alt="" className='absolute -top-2 -right-1' />
                        </div>
                        <div>
                            <p className='font-semibold'>CryptoFunks</p>
                            <div className='flex space-x-2'>
                                <img src={icon} alt="" />
                                <span className='text-sm'>19,769.39</span>
                            </div>
                        </div>
                        <div className='font-extrabold text-[#14C8B0]'>
                            +26.52%
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <h1 className='font-bold text-lg'>2</h1>
                        <div>
                            <img src={collection2} alt="" />
                        </div>
                        <div>
                            <p className='font-semibold'>CryptoFunks</p>
                            <div className='flex space-x-2'>
                                <img src={icon} alt="" />
                                <span className='text-sm'>19,769.39</span>
                            </div>
                        </div>
                        <div className='font-extrabold text-[#FF002E]'>
                            +26.52%
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <h1 className='font-bold text-lg'>3</h1>
                        <div>
                            <img src={collection3} alt="" />
                        </div>
                        <div>
                            <p className='font-semibold'>CryptoFunks</p>
                            <div className='flex space-x-2'>
                                <img src={icon} alt="" />
                                <span className='text-sm'>19,769.39</span>
                            </div>
                        </div>
                        <div className='font-extrabold text-[#14C8B0]'>
                            +26.52%
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <h1 className='font-bold text-lg'>4</h1>
                        <div className='relative'>
                            <img src={collection4} alt="" />
                            <img src={verify} alt="" className='absolute -top-2 -right-1' />
                        </div>
                        <div>
                            <p className='font-semibold'>CryptoFunks</p>
                            <div className='flex space-x-2'>
                                <img src={icon} alt="" />
                                <span className='text-sm'>19,769.39</span>
                            </div>
                        </div>
                        <div className='font-extrabold text-[#14C8B0]'>
                            +26.52%
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <h1 className='font-bold text-lg'>5</h1>
                        <div>
                            <img src={collection5} alt="" />
                        </div>
                        <div>
                            <p className='font-semibold'>CryptoFunks</p>
                            <div className='flex space-x-2'>
                                <img src={icon} alt="" />
                                <span className='text-sm'>19,769.39</span>
                            </div>
                        </div>
                        <div className='font-extrabold text-[#FF002E]'>
                            +26.52%
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Collection;