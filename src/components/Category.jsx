import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { BiFilter } from "react-icons/bi";

const Category = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`/data.json`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1 className="uppercase text-left text-3xl font-extrabold text-black mb-10">discover more nfts</h1>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>All Categories</a></li>
                            <li><a>Art</a></li>
                            <li><a>Celebrities</a></li>
                            <li><a>Gaming</a></li>
                            <li><a>Sports</a></li>
                            <li><a>Music</a></li>
                            <li><a>Crypto</a></li>
                        </ul>
                    </div>
                    <div className="lg:flex hidden">
                        <a className="btn btn-ghost normal-case text-base hover:bg-[#3D00B7] hover:text-white">All Categories</a>
                        <a className="btn btn-ghost normal-case text-base hover:bg-[#3D00B7] hover:text-white">Art</a>
                        <a className="btn btn-ghost normal-case text-base hover:bg-[#3D00B7] hover:text-white">Celebrities</a>
                        <a className="btn btn-ghost normal-case text-base hover:bg-[#3D00B7] hover:text-white">Gaming</a>
                        <a className="btn btn-ghost normal-case text-base hover:bg-[#3D00B7] hover:text-white">Sports</a>
                        <a className="btn btn-ghost normal-case text-base hover:bg-[#3D00B7] hover:text-white">Music</a>
                        <a className="btn btn-ghost normal-case text-base hover:bg-[#3D00B7] hover:text-white">Crypto</a>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn text-[#3D00B7]"> <BiFilter className="text-4xl"></BiFilter> All Filters</a>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {items.map(item => (
                    <CategoryCard key={item.id} item={item} />
                ))}
            </div>
            <div>
                <button className="btn btn-outline text-[#3D00B7] my-10 hover:bg-[#3D00B7] hover:text-white">More NFTs</button>
            </div>
        </div>
    );
};

export default Category;
