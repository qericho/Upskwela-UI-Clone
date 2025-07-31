import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { CiMap } from "react-icons/ci";
import { useEffect, useState } from "react";

const Nav = () => {
    const [openNav, SetOPenNav] = useState(false);
    const handleNav = () => {
        SetOPenNav((prev) => !prev);
    };
    useEffect(() => {
        if (openNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => document.body.style.overflow = "";
    }, [openNav]);

    return (
        <nav>
            {/* Overlay */}
            {openNav ? <div className="w-full h-full fixed left-0 bg-black/50 z-1 md:hidden"></div>
                : ("")}

            <div className="px-0 md:px-10 py-4 flex items-center justify-between relative">
                <div className="flex items-center space-x-5 text-[hsl(202,50%,40%)] ">
                    <img
                        className="w-[130px]"
                        src="https://www.upskwela.com/_astro/logo.BY9msEYF.svg"
                        alt="Logo"
                    />
                    {/* Links */}
                    <ul className="space-x-5 md:flex hidden">
                        <li className="text-[13px] font-bold text-sky-500">Home</li>
                        <li className="text-[13px] font-bold">Roadmap</li>
                    </ul>
                </div>

                {/* Login/Sign Up */}
                <div className="font-bold space-x-3 md:flex hidden text-[13px]">
                    <button className="px-3 py-2 text-[hsl(202,50%,40%)] cursor-pointer">Login</button>
                    <button className="px-3 py-1 bg-[hsl(207,83%,49%)] text-white rounded cursor-pointer">Sign Up</button>
                </div>

                <span
                    onClick={handleNav}
                    className="md:hidden flex cursor-pointer"
                >
                    <FaBars />
                </span>

                {/* Mobile Nav */}
                <div
                    className={`${openNav ? "right-0 " : "right-[-900px]"} md:hidden
                    h-full w-[300px] fixed top-0 bg-white z-1`}
                >
                    <div className="flex flex-col px-8 py-12 space-y-10 relative">
                        <ul className="font-bold space-y-5">
                            <li className="text-sky-500 text-[13px] font-bold bg-black/5 p-2 rounded cursor-pointer">
                                Home
                            </li>
                            <li className="text-[13px] font-bold p-2 rounded flex items-center gap-2 text-sky-700 cursor-pointer">
                                <CiMap />
                                Roadmap
                            </li>
                        </ul>

                        <div className="w-[85%] h-[1px] bg-[#ddd] absolute top-[150px] left-1/2 -translate-x-1/2"></div>

                        {/* Login/Sign Up */}
                        <div className="font-bold space-y-5">
                            <button className="text-[13px] w-full py-2 text-sky-700 cursor-pointer">
                                Login
                            </button>
                            <button className="text-[13px] w-full py-2 text-white bg-sky-500 hover:bg-sky-600 rounded cursor-pointer">
                                Sign Up
                            </button>
                        </div>

                        <span
                            onClick={handleNav}
                            className="absolute top-5 right-5 cursor-pointer"
                        >
                            <RxCross1 />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
