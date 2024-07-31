
import fast from '../assets/criteria/fast.svg'
import grwoth from '../assets/criteria/growth.svg'
const Criteria = () => {
    return (
        <div className="my-32 bg-[#F7F9FB] grid lg:grid-cols-3 sm:grid-cols-1 sm:mx-10 lg:mx-0 ">
            <div className=''>
                <h1 className="text-3xl font-bold uppercase text-black">the amazing nft art <br /> of the world here</h1>
            </div>
            <div className=''>
                <div className='flex'>
                    <img src={fast} alt="" />
                    <h5 className='text-lg font-bold mx-4'>Fast Transaction</h5>
                </div>
                <p className='text-left ml-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
            </div>
            <div>
                <div className='flex'>
                    <img src={grwoth} alt="" />
                    <h5 className='text-lg font-bold mx-4'>Growth Transaction</h5>
                </div>
                <p className='text-left ml-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
            </div>

        </div>
    );
};

export default Criteria;