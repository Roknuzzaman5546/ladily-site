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
                <div>
                    <div className={`flex justify-between items-center py-[16px] sm:w-[540px] md:w-[720px] lg:w-[966px] xl:w-[1140px] 2xl:w-[1360px] mx-auto`}>
                        <div className='flex items-center'>
                            <img className='' src={logo} height={90} width={90} alt="" />
                        </div>
                        <div className=" flex items-stretch gap-4 w-1/2">
                            <div className=" w-full">
                                <div
                                    className='flex justify-center items-center border-b-[1.5px] border-black'>
                                    <input type="text" placeholder='Search in Ladily' className=' placeholder:font-cormorant placeholder:text-black placeholder:font-semibold border-none outline-0 ring-0 w-full' />
                                    <button>
                                        <SearchIcon></SearchIcon>
                                    </button>
                                </div>
                            </div>
                            <button>
                                <UserIcon></UserIcon>
                            </button>
                            <button className=" flex">
                                <LoveIcon></LoveIcon>
                                <div className="w-[16px] h-[16px] text-[10px] text-white bg-[#543310] flex justify-center items-center -mt-1 -ml-2 rounded-full">
                                    <p>0</p>
                                </div>
                            </button>
                            <button className=" flex">
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