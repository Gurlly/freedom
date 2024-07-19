
// Icons
import { FaHome, FaBars } from "react-icons/fa";
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
                    className="w-11 h-11 mr-2 rounded-full shadow-sm shadow-freedom-text"
                    />
                </a>

                {/** Drawer Toggle Menu */}
                <input type="checkbox" id="sideNavDrawer" className="drawer-toggle" />

                <ul className="hidden lg:flex items-center">
                    <li>
                        <a href="#home" className="text-freedom-text mr-10 font-semibold hover:text-blue-500 transition-colors ease-linear duration-150">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-freedom-text mr-10 font-semibold hover:text-blue-500 transition-colors ease-linear duration-150">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#join" className="text-freedom-text mr-10 font-semibold hover:text-blue-500 transition-colors ease-linear duration-150">
                            Join a Ministry
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-freedom-text font-semibold hover:text-blue-500 transition-colors ease-linear duration-150">
                            Contact Us
                        </a>
                    </li>
                </ul>

                <label
                className="lg:hidden p-1 text-freedom-text rounded-md cursor-pointer hover:bg-amber-50 transition ease-linear"
                htmlFor="sideNavDrawer"
                >
                    <FaBars size={23} />
                </label>

                <label className="overlay" htmlFor="sideNavDrawer"></label>

                {/** Drawer Menu */}
                <div className="drawer drawer-right bg-zinc-50 text-freedom-text">
                    <div className="flex flex-col h-full">
                        <div className='p-4 bg-freedom-yellow flex items-center justify-between border-b-2 border-stone-800'>
                            <h2 className="text-2xl font-extrabold font-serif text-freedom-text tracking-wider">Freedom</h2>
                            <label htmlFor="sideNavDrawer" className="btn btn-sm btn-circle btn-ghost font-semibold hover:bg-amber-100 text-lg text-freedom-text transition-colors ease-linear">✕</label>
                        </div>
                        <nav className="menu">
                            <section className="menu-section">
                                <a 
                                className="menu-item py-3 rounded-none font-semibold text-freedom-text hover:bg-freedom-blue hover:text-zinc-50 transition-colors ease-linear"
                                href="#home"
                                >
                                    <FaHome className="text-lg" />
                                    <span>Home</span>
                                </a>
                                <a 
                                className="menu-item py-3 rounded-none font-semibold text-freedom-text hover:bg-freedom-blue hover:text-zinc-50 transition-colors ease-linear"
                                href="#about"
                                >
                                    <BiSolidChurch className="text-lg" />
                                    <span>About</span>
                                </a>
                                <a 
                                className="menu-item py-3 rounded-none font-semibold text-freedom-text hover:bg-freedom-blue hover:text-zinc-50 transition-colors ease-linear"
                                href="#join"
                                >
                                    <HiUserGroup className="text-lg" />
                                    <span>Join a Ministry</span>
                                </a>
                                <a 
                                className="menu-item py-3 rounded-none font-semibold text-freedom-text hover:bg-freedom-blue hover:text-zinc-50 transition-colors ease-linear"
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
