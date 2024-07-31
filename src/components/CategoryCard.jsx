import icon from '../assets/category/greenIcon.svg';
import user1 from '../assets/category/user1.svg'
import user2 from '../assets/category/user2.svg'
import user3 from '../assets/category/user3.svg'
import user4 from '../assets/category/user4.svg'



const CategoryCard = ({ item }) => {
    const { coverPhoto, title } = item;
    return (
        <div className="card p-4 animate-wave hover:animate-wave ">
            <div className="relative">
                <img src={coverPhoto} alt="Main Picture" className="w-full rounded-lg" />
                <div className="absolute bottom-0 left-4">
                    <div className="flex relative">
                        <img src={user1} alt="Small Picture 1" className="w-8 h-8 rounded-full" />
                        <img src={user2} alt="Small Picture 2" className="w-8 h-8 rounded-full absolute bottom-0 left-5" />
                        <img src={user3} alt="Small Picture 3" className="w-8 h-8 rounded-full absolute bottom-0 left-10" />
                        <img src={user4} alt="Small Picture 3" className="w-8 h-8 rounded-full absolute bottom-0 left-14" />
                    </div>
                </div>
            </div>
            <div className="card-content space-y-3">
                <h1 className="text-xl font-bold text-left mt-3">{title}</h1>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <img src={icon} alt="" className='w-2 h-4' />
                        <p className='text-[#00AC4F]'>0.25 ETH</p>
                    </div>
                    <p>1 of 321</p>
                </div>
                <div className="flex justify-between">
                    <a className="btn btn-ghost btn-xs normal-case text-xs text-[#3D00B7] bg-[#e8eef8] hover:bg-[#3D00B7] hover:text-white">3h 50m 2s left</a>
                    <a className="btn btn-ghost btn-xs normal-case text-xs text-[#3D00B7] hover:bg-[#3D00B7] hover:text-white">Place a bid</a>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
