import facebook from '../assets/footer/facebook.svg'
import twitter from '../assets/footer/twitter.svg'
import linkedin from '../assets/footer/linkedin.svg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  text-base-content">
                <div className="text-left text-black">
                    <h1 className="text-2xl font-bold mb-4">NFTERS</h1>
                    <p>The world’s first and largest digital marketplace for <br /> crypto collectibles and non-fungible tokens (NFTs). <br /> Buy, sell, and discover exclusive digital items.</p>
                    <div className='flex  gap-4 mt-4'>
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={twitter} alt="" /></a>
                        <a href=""><img src={linkedin} alt="" /></a>

                    </div>
                </div>
                <div>
                    <span className="footer-title text-base text-black">Market Place</span>
                    <a className="link link-hover">All NFTs</a>
                    <a className="link link-hover">New</a>
                    <a className="link link-hover">Art</a>
                    <a className="link link-hover">Sports</a>
                    <a className="link link-hover">Utility</a>
                    <a className="link link-hover">Music</a>
                    <a className="link link-hover">Domain Name</a>
                </div>
                <div>
                    <span className="footer-title text-base text-black">My Account</span>
                    <a className="link link-hover">Profile</a>
                    <a className="link link-hover">Favorite</a>
                    <a className="link link-hover">My Collections</a>
                    <a className="link link-hover">Settings</a>
                </div>
                <div>
                    <span className="footer-title text-base text-black">Stay In The Loop</span>
                    <p className='text-left'>Join our mailing list to stay in the loop with our newest <br /> feature releases, NFT drops, and tips and tricks for <br /> navigating NFTs.</p>
                    <div className="relative">
                        <input type="text" placeholder="Enter your email address" className="input input-bordered w-full pr-40" />
                        <button className="btn btn-primary bg-[#2639ED] text-white absolute top-0 right-1 rounded-full">Subscribe Now</button>
                    </div>

                </div>
            </footer>
            <p>Copyright © 2022 Avi Yansah</p>
        </div>
    );
};

export default Footer;