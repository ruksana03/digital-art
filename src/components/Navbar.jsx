
const Navbar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Marketplace</a></li>
                        <li><a>Resource</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-[#3D00B7] font-bold">NFTERS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1  text-base font-medium">
                    <li><a>Marketplace</a></li>
                    <li><a>Resource</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
            <div className="navbar-end ">
                <input type="text" placeholder="search.." className="input input-bordered input-primary md:w-1/2 sm:w-1/2 max-w-xs mr-5" />

                <button className="lg:btn lg:bg-[#3D00B7] lg:text-white lg:mr-5 hidden ">Upload</button>
                <button className="lg:btn btn-outline  lg:border-[#3D00B7] lg:text-[#3D00B7] lg:mr-5 hidden">Connect Wallet</button>

            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
                    <button className="btn bg-[#3D00B7] text-white mr-5  ">Upload</button>
                    <button className="btn btn-outline  border-[#3D00B7] text-[#3D00B7] mr-5 ">Connect Wallet</button>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;