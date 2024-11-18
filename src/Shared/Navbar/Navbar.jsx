import { useEffect, useState } from "react";
import logo from '../../assets/logo.png'
import SearchIcon from "../SearchIcon/SearchIcon";

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
        <div className={`w-full sticky top-0 left-0 right-0 bg-white mx-auto transition-all duration-500 ease-in-out z-[310] ${isNavbarJumping ? "shadow-md" : "transition-all duration-300 ease-in-out"}`}>
            {/* for desktop & tab device */}
            <div className={`md:block hidden relative`}>
                {/* Upper menu */}
                <div>
                    <div className={`flex py-[16px] sm:w-[540px] md:w-[720px] lg:w-[966px] xl:w-[1140px] 2xl:w-[1360px] mx-auto`}>
                        <div className='flex items-center '>
                            <img className='' src={logo} height={90} width={90} alt="" />
                        </div>

                        <div
                            className='flex justify-center items-center border-b-[1.5px] border-black'>
                            <input type="text" placeholder='Search in ladily' className=' border-none outline-0 ring-0' />
                            <button>
                                <SearchIcon></SearchIcon>
                            </button>
                        </div>
                    </div>

                </div>
                {/* down menu */}
                <div className="w-full bg-white">
                    <div className={`max-w-[1280px] mx-auto custom-range:px-12 px-5 pt-[12px] ${isNavbarJumping ? "h-0 opacity-0 hidden transition-all duration-300 ease-in-out" : "h-auto opacity-100"}`}>
                        <div className={`border-[#f5f5f5] lg:flex md:hidden hidden justify-between items-center pb-[10px]`}>
                            <div className="flex items-center">
                                <a className="navAfter relative font-semibold mr-6 text-[#323232] text-[13px] font-sans cursor-pointer">fotoservice</a>
                                <a className="navAfter relative font-semibold mr-6 text-[#323232] text-[13px] font-sans cursor-pointer">tickets & deals</a>
                                <a className="navAfter relative font-semibold mr-6 text-[#323232] text-[13px] font-sans cursor-pointer">verzekeringen</a>
                                <a className="navAfter relative font-semibold text-[#323232] text-[13px] font-sans cursor-pointer">inspiratie</a>
                            </div>
                            <div className="flex items-center">
                                <a className="navAfter relative mr-6 font-semibold text-[#323232] text-[13px] font-sans cursor-pointer">winkels</a>
                                <a className="navAfter relative mr-6 font-semibold text-[#323232] text-[13px] font-sans  cursor-pointer">oklantenpas</a>
                                <a className="navAfter relative font-semibold text-[#323232] text-[13px] font-sans cursor-pointer">klantenservice</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;