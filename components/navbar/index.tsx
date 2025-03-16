"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useTheme from '@/hooks/use-theme';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Second Page', path: '/second-page' },
    { name: 'Third Page', path: '/third-page' },
];

function NavBar() {
    const pathname = usePathname();
    const [navbar, setNavbar] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { theme: currentTheme, setDarkTheme, setLightTheme, setSystemTheme } = useTheme() || {
        theme: 'light',
        setDarkTheme: () => { },
        setLightTheme: () => { },
        setSystemTheme: () => { },
    };

    const handleToggleTheme = (theme: "dark" | "light" | "system") => {
        if (theme === 'light' && setLightTheme) {
            setLightTheme();
        } else if (theme === 'dark' && setDarkTheme) {
            setDarkTheme();
        } else if (theme === "system" && setSystemTheme) {
            setSystemTheme();
        }
        setDropdown(false);
    };

    const linkStyles = (path: string) =>
        `pb-6 text-xl font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0 
        hover:bg-[#7f2d00] hover:text-white border-[#243353] 
        md:hover:text-[#e29b64] md:hover:bg-transparent 
        ${pathname === path ? 'text-[#e29b64]' : 'text-[#000000] dark:text-gray-300'}`;
    return (
        <nav className="w-full fixed top-0 left-0 right-0 z-10 shadow-md shadow-bottom shadow-[#24335330] max-h-[100vh] md:max-h-16  py-2 relative">
            <div className="flex justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                <Link href="/" className='text-lg lg:text-2xl font-bold'>
                    LOGO
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <button className="absolute md:hidden right-2 top-1 p-2" onClick={() => setNavbar(!navbar)}>
                    <Image src={navbar ? '/assets/icons/close.svg' : '/assets/icons/menu.svg'} width={30} height={30} alt="menu" />
                </button>
                {/* NAVIGATION LINKS */}
                <div className={`flex-1 md:block ${navbar ? 'block p-12 md:p-0' : 'hidden'}`}>
                    <ul className="h-screen md:h-auto flex flex-col md:flex-row items-center justify-start md:justify-end mt-12 md:mt-0">
                        {navLinks.map(({ name, path }) => (
                            <li key={path} className={linkStyles(path)}>
                                <Link href={path} onClick={() => setNavbar(false)}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* THEME TOGGLE DROPDOWN */}
                <div className="relative">
                    <button className="flex items-center justify-start space-x-2 mr-12" onClick={() => setDropdown(!dropdown)}>
                        <Image src={currentTheme === 'dark' ? '/assets/icons/moon.svg' : '/assets/icons/sun.svg'} width={24} height={24} alt="theme icon" />
                    </button>
                    <div className={`absolute right-0 md:right-0 mt-2 w-24 bg-white border rounded-md shadow-lg ${dropdown ? 'block' : 'hidden'}`}>
                        <button className="block w-full px-4 py-2 text-left" onClick={() => handleToggleTheme('light')}>
                            <Image src="/assets/icons/sun.svg" width={24} height={24} alt="light mode" className="inline mr-2" />
                        </button>
                        <button className="block w-full px-4 py-2 text-left" onClick={() => handleToggleTheme('dark')}>
                            <Image src="/assets/icons/moon.svg" width={24} height={24} alt="dark mode" className="inline mr-2" />
                        </button>
                        <button className="block w-full px-4 py-2 text-left" onClick={() => handleToggleTheme('system')}>
                            <Image src="/assets/icons/system.svg" width={24} height={24} alt="system mode" className="inline mr-2" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;