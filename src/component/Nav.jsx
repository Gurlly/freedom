
// Icons
import { BsThreeDots } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BiSolidChurch } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
import { RiContactsBook2Fill } from "react-icons/ri";

// Image
import Logo from '../resources/freedom_logo.png'

const Nav = () => {

    return (
        <>
            <div className="flex items-center justify-between font-sans">
                <a href="/">
                    <img
                    src={Logo}
                    alt="Freedom Christian Fellowship Logo"
                    className="w-11 h-11 mr-2 rounded-full shadow-md shadow-zinc-400"
                    />
                </a>

                {/** Drawer Toggle Menu */}
                <input type="checkbox" id="sideNavDrawer" className="drawer-toggle" />

                <ul className="hidden lg:flex items-center">
                    <li>
                        <a href="#home" className="text-stone-800 mr-10 font-medium hover:text-blue-500 transition-colors ease-linear">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-stone-800 mr-10 font-medium hover:text-blue-500 transition-colors ease-linear">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#join" className="text-stone-800 mr-10 font-medium hover:text-blue-500 transition-colors ease-linear">
                            Join a Ministry
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-stone-800 font-medium hover:text-blue-500 transition-colors ease-linear">
                            Contact Us
                        </a>
                    </li>
                </ul>

                <label
                className="lg:hidden p-1 bg-zinc-50 text-xl text-zinc-900 border rounded-md border-zinc-600 cursor-pointer hover:bg-amber-50 transition ease-in-out delay-75"
                htmlFor="sideNavDrawer"
                >
                    <BsThreeDots/>
                </label>

                <label className="overlay" htmlFor="sideNavDrawer"></label>

                {/** Drawer Menu */}
                <div className="drawer drawer-right bg-zinc-100 text-zinc-800">
                    <div className="flex flex-col h-full">
                        <div className='p-4 bg-amber-200 flex items-center justify-between border-b-2 border-gray-600'>
                            <h2 className="text-2xl font-extrabold text-zinc-800 font-serif tracking-wider">Freedom</h2>
                            <label htmlFor="sideNavDrawer" className="btn btn-sm btn-circle btn-ghost hover:bg-amber-100 text-lg text-zinc-800 transition-colors ease-linear delay-75">✕</label>
                        </div>
                        <nav className="menu">
                            <section className="menu-section">
                                <a 
                                className="menu-item py-3 rounded-none font-semibold text-zinc-800 hover:bg-blue-500 hover:text-zinc-100 transition-colors ease-linear"
                                href="#home"
                                >
                                    <FaHome className="text-lg" />
                                    <span>Home</span>
                                </a>
                                <a 
                                className="menu-item py-3 rounded-none font-semibold text-zinc-800 hover:bg-blue-500 hover:text-zinc-100 transition-colors ease-linear"
                                href="#about"
                                >
                                    <BiSolidChurch className="text-lg" />
                                    <span>About</span>
                                </a>
                                <a 
                                className="menu-item py-3 rounded-none font-semibold text-zinc-800 hover:bg-blue-500 hover:text-zinc-100 transition-colors ease-linear"
                                href="#join"
                                >
                                    <HiUserGroup className="text-lg" />
                                    <span>Join a Ministry</span>
                                </a>
                                <a 
                                className="menu-item py-3 rounded-none font-semibold text-zinc-800 hover:bg-blue-500 hover:text-zinc-100 transition-colors ease-linear"
                                href="#contact"
                                >
                                    <RiContactsBook2Fill className="text-lg" />
                                    <span>Contact Us</span>
                                </a>
                            </section>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
