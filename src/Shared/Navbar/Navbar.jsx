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
                    <div className={`flex justify-between items-start pt-[16px] pb-[15.5px] sm:w-[540px] md:w-[720px] lg:w-[966px] xl:w-[1140px] 2xl:w-[1360px] mx-auto pr-[6px]`}>
                        <div className='flex items-center'>
                            <img className='' src={logo} height={20} width={89.9} alt="" />
                        </div>
                        <div className="flex items-end w-[43.3%] -mt-[2px]">
                            <div className="w-full">
                                <div className="flex justify-center items-end border-b-[1.5px] border-black pb-[4px]">
                                    <input
                                        type="text"
                                        placeholder="Search in Ladily"
                                        className="placeholder:font-cormorant placeholder:text-black placeholder:font-semibold border-none outline-0 ring-0 w-full"
                                    />
                                    <button>
                                        <SearchIcon className="mt-[5px]" />
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