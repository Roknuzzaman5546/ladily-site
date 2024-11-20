import { useEffect, useState } from "react";
import logo from '../../assets/logo.png'
import SearchIcon from "../Icon/SearchIcon";
import UserIcon from "../Icon/UserIcon";
import LoveIcon from "../Icon/LoveIcon";
import CartIcon from "../Icon/CartIcon";
import './Navbar.css'
import ChevronDownIcon from "../Icon/ChevronDownIcon";

const Navbar = () => {
    const [isNavbarJumping, setIsNavbarJumping] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 100;
            setIsNavbarJumping(scrollY > scrollThreshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div>
            {/* for desktop & tab device */}
            <div className={`md:block hidden relative shadow-md`}>
                {/* Upper menu */}
                <div className="border-b-[1.5px] border-[#d4d4d4]">
                    <div className={`flex justify-between items-center h-[63px] sm:w-[540px] md:w-[720px] lg:w-[966px] xl:w-[1140px] 2xl:w-[1360px] mx-auto pr-0 md:pr-[6px] lg:pr-[6px] xl:pr-0`}>
                        <div className='flex items-center'>
                            <a href="">
                                <img className=' w-[100px]' src={logo} alt="" />
                            </a>
                        </div>
                        <div className="flex items-end -mt-[2px]">
                            <div className="w-full md:w-[298px] pb-[1px]">
                                <div className="flex justify-center items-center border-b-[1.5px] border-black">
                                    <input
                                        type="text"
                                        placeholder="Search in Ladily"
                                        className="placeholder:font-cormorant placeholder:font-semibold border-none outline-0 ring-0 w-full pb-[1px]"
                                    />
                                    <button>
                                        <SearchIcon />
                                    </button>
                                </div>
                            </div>
                            <button className="pl-4">
                                <UserIcon />
                            </button>
                            <button className=" flex !pl-4">
                                <LoveIcon></LoveIcon>
                                <div className="w-[16px] h-[16px] text-[10px] text-white bg-[#543310] flex justify-center items-center -mt-1 -ml-2 rounded-full">
                                    <p>0</p>
                                </div>
                            </button>
                            <button className=" flex !pl-4 dropdown-parent relative">
                                <CartIcon></CartIcon>
                                <div className="w-[16px] h-[16px] text-[10px] text-white bg-[#543310] flex justify-center items-center -mt-1 -ml-2 rounded-full">
                                    <p>0</p>
                                </div>

                                {/* cartDropdown */}
                                <div className=" absolute top-6 dropdown-info right-1 shadow-md bg-white w-[580px] h-[300px] p-10 transition-colors duration-500 border-[0.5px] border-[#d4d4d4]">
                                    <div className=" flex justify-between items-center text-[#543310] border-b border-[#d4d4d4] pb-7">
                                        <h2 className="text-3xl font-cormorant font-bold">Your Cart</h2>
                                        <p className="text-3xl font-bold">(0)</p>
                                    </div>
                                    <h3 className=" font-cormorant text-xl pt-16">No items in your cart</h3>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* down menu */}
                <div className="w-full bg-white flex justify-center items-center h-[55px]">
                    <div>
                        <nav className=" flex justify-center items-center gap-2">
                            <li className=" font-cormorant text-xl font-semibold list-none">Face</li>
                            <p><ChevronDownIcon /></p>
                        </nav>
                    </div>
                    <div>
                        <nav className=" flex justify-center items-center gap-2">
                            <li className=" font-cormorant text-xl font-semibold list-none">Eyes</li>
                            <p><ChevronDownIcon /></p>
                        </nav>
                    </div>
                    <div>
                        <nav className=" flex justify-center items-center gap-2">
                            <li className=" font-cormorant text-xl font-semibold list-none">Hair</li>
                            <p><ChevronDownIcon /></p>
                        </nav>
                    </div>
                    <div>
                        <nav className=" flex justify-center items-center gap-2">
                            <li className=" font-cormorant text-xl font-semibold list-none">Body care</li>
                            <p><ChevronDownIcon /></p>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;