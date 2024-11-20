import { useEffect, useState } from "react";
import logo from '../../assets/logo.png'
import SearchIcon from "../Icon/SearchIcon";
import UserIcon from "../Icon/UserIcon";
import LoveIcon from "../Icon/LoveIcon";
import CartIcon from "../Icon/CartIcon";

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
            <div className={`md:block hidden relative`}>
                {/* Upper menu */}
                <div className="border-b-[1.5px] border-[#d4d4d4]">
                    <div className={`flex justify-between items-center h-[63px] sm:w-[540px] md:w-[720px] lg:w-[966px] xl:w-[1140px] 2xl:w-[1360px] mx-auto pr-0 md:pr-[6px] lg:pr-[6px] xl:pr-0`}>
                        <div className='flex items-center'>
                            <a href="">
                                <img className=' w-[100px]' src={logo} alt="" />
                            </a>
                        </div>
                        <div className="flex items-end -mt-[2px]">
                            <div className="w-full md:w-[297px]">
                                <div className="flex justify-center items-center border-b-[1.5px] border-black">
                                    <input
                                        type="text"
                                        placeholder="Search in Ladily"
                                        className="placeholder:font-cormorant placeholder:text-[#0000] placeholder:font-semibold border-none outline-0 ring-0 w-full pb-[1px]"
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
                            <button className=" flex !pl-4">
                                <CartIcon></CartIcon>
                                <div className="w-[16px] h-[16px] text-[10px] text-white bg-[#543310] flex justify-center items-center -mt-1 -ml-2 rounded-full">
                                    <p>0</p>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
                {/* down menu */}
                <div className="w-full bg-white">
                </div>
            </div>
        </div>
    );
};

export default Navbar;