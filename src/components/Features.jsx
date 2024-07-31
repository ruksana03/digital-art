import big1 from '../assets/features/big1.png'
import big2 from '../assets/features/big2.png'
import big3 from '../assets/features/big3.png'
import mid1 from '../assets/features/mid1.png'
import mid2 from '../assets/features/mid2.png'
import mid3 from '../assets/features/mid3.png'
import mid4 from '../assets/features/mid4.png'
import mid5 from '../assets/features/mid5.png'
import user from '../assets/features/user.png'

const Features = () => {
    return (
        <div className="bg-[#D9E0EC33] my-24 ">
            <h1 className="uppercase text-3xl font-extrabold text-left pt-20">collection featured nfts</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-16 '>
                <div className='space-y-4'>
                    <div className='flex gap-4'>
                        <div>
                            <img src={big1} alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <img src={mid1} alt="" /><img src={mid2} alt="" /><img src={mid3} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold text-left'>Amazing Collection</h3>
                        <div className='flex mt-3 mb-10'>
                            <img src={user} alt="" />
                            <p className='flex flex-grow ml-2'>by Arkhan</p>
                            <button className='btn btn-sm btn-outline mr-5'>Total 54 Items</button>
                        </div>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='flex gap-4'>
                        <div>
                            <img src={big2} alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <img src={mid4} alt="" /><img src={mid3} alt="" /><img src={mid1} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold text-left'>Amazing Collection</h3>
                        <div className='flex mt-3 mb-10'>
                            <img src={user} alt="" />
                            <p className='flex flex-grow ml-2'>by Arkhan</p>
                            <button className='btn btn-sm btn-outline mr-5'>Total 54 Items</button>
                        </div>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='flex gap-4'>
                        <div>
                            <img src={big3} alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <img src={mid2} alt="" /><img src={mid3} alt="" /><img src={mid5} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold text-left'>Amazing Collection</h3>
                        <div className='flex mt-3 mb-10'>
                            <img src={user} alt="" />
                            <p className='flex flex-grow ml-2'>by Arkhan</p>
                            <button className='btn btn-sm btn-outline mr-5'>Total 54 Items</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Features;