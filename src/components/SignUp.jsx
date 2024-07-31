import photo1 from '../assets/signup/photo1.png'
import photo2 from '../assets/signup/photo2.png'
import photo3 from '../assets/signup/photo3.png'
import user1 from '../assets/signup/user1.png'
import user2 from '../assets/signup/user2.png'

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-40">
            <div className="hero-content flex-col lg:flex-row w-full">

                <div className="w-1/2 flex p-2 gap-8">
                    <div className='flex flex-col gap-8'>
                        <div className="relative">
                            <img src={photo1} alt="Main Picture" className="rounded-lg" />
                            <img src={user1} alt="Small Picture" className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full" />
                        </div>
                        <div className='flex justify-end'>
                            <div className="relative">
                                <img src={photo2} alt="Main Picture" className="rounded-lg" />
                                <img src={user2} alt="Small Picture" className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full" />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className="relative">
                            <img src={photo3} alt="Main Picture" className="rounded-lg" />
                            <img src={user2} alt="Small Picture" className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full" />
                        </div>
                    </div>

                </div>
                <div className="w-1/2 space-y-8 flex flex-col items-start">
                    <h1 className="text-4xl font-bold uppercase text-left text-black">Create and <br /> sell your NFTS</h1>
                    <p className="text-left text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Facilisi ac phasellus placerat a pellentesque tellus sed <br /> egestas. Et tristique dictum sit tristique sed non. Lacinia lorem <br /> id consectetur pretium diam ut. Pellentesque eu sit blandit <br /> fringilla risus faucibus.</p>
                    <button className="btn btn-primary bg-[#3D00B7] text-white">Sign Up Now</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

