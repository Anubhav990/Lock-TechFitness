import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Link, NavLink } from 'react-router-dom';
import mainlogo from '../../assets/mainlogo.svg';
import Modal from '../../components/logoutmodal/Modal.component';

function Header({ logoName = "Lock-Tech Fitness", logoSrc = mainlogo, logoAlt = "LockTechFitness", btnText1 = "Sign Up", btnText2 = "Log In", btnText3 = "Log Out", onLogOutClick }) {

    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);
            setUser(session?.user || null);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const handleLogOut = async () => {
        await supabase.auth.signOut();
        setShowModal(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu visibility
    };

    return (
        <>
            <div className="relative w-full md:bg-white bg-blue-100 rounded font-robotoC">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2">
                        <span>
                            <img
                                src={logoSrc}
                                alt={logoAlt}
                                width="40"
                                height="40"
                            />
                        </span>
                        <span className="font-bold">{logoName}</span>
                    </div>
                    <div className="hidden grow items-start lg:flex">
                        <ul className="ml-12 inline-flex space-x-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 hover:scale-110 cursor-pointer"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <Link
                                    to="/About"
                                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 hover:scale-110 cursor-pointer"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <NavLink
                                    to="/FAQTwo"
                                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 hover:scale-110 cursor-pointer"
                                >
                                    FAQs
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden space-x-2 lg:block">
                        {user ? (
                            <button
                                onClick={() => setShowModal(true)} // Show modal on logout click
                                className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                            >
                                {btnText3}
                            </button>
                        ) : (
                            <>
                                <Link
                                    to="/SignUp"
                                    className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:scale-105 cursor-pointer"
                                >
                                    {btnText1}
                                </Link>
                                <Link
                                    to="/LogIn"
                                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer hover:bg-indigo-500 hover:border-none hover:text-white transition-all duration-100 ease-in-out"
                                >
                                    {btnText2}
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="lg:hidden">
                        {menuOpen ? (
                            <svg
                                onClick={toggleMenu} // Cross icon to close menu
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 cursor-pointer"
                            >
                                <line x1="4" y1="4" x2="20" y2="20"></line>
                                <line x1="20" y1="4" x2="4" y2="20"></line>
                            </svg>
                        ) : (
                            <svg
                                onClick={toggleMenu} // Hamburger icon to open menu
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 cursor-pointer"
                            >
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </svg>
                        )}
                    </div>
                </div>
                {menuOpen && ( // Conditionally render mobile menu
                    <div className="lg:hidden">
                        <ul className="flex flex-col items-center space-y-4 bg-blue-50 rounded-lg py-4">
                            <li>
                                <NavLink
                                    to="/"
                                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                                    onClick={() => setMenuOpen(false)} // Close menu on link click
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <Link
                                    to="/About"
                                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                                    onClick={() => setMenuOpen(false)} // Close menu on link click
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <NavLink
                                    to="/FAQTwo"
                                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                                    onClick={() => setMenuOpen(false)} // Close menu on link click
                                >
                                    FAQs
                                </NavLink>
                            </li>
                            <li className="flex flex-col space-y-4"> {/* Added flex column layout */}
                                {user ? (
                                    <button
                                        onClick={() => {
                                            setShowModal(true); // Show modal on logout click
                                            setMenuOpen(false); // Close menu
                                        }}
                                        className="text-sm font-semibold text-red-500"
                                    >
                                        {btnText3}
                                    </button>
                                ) : (
                                    <>
                                        <Link
                                            to="/SignUp"
                                            className="text-sm font-semibold text-blue-500 hover:text-gray-900"
                                            onClick={() => setMenuOpen(false)} // Close menu on link click
                                        >
                                            {btnText1}
                                        </Link>
                                        <Link
                                            to="/LogIn"
                                            className="text-sm font-semibold text-blue-500 hover:text-gray-900"
                                            onClick={() => setMenuOpen(false)} // Close menu on link click
                                        >
                                            {btnText2}
                                        </Link>
                                    </>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleLogOut}
            />
        </>
    );
}

export default Header;
