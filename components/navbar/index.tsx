'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Second Page', path: '/second-page' },
    { name: 'Third Page', path: '/third-page' },
];

function NavBar() {
    const pathname = usePathname();
    const [navbar, setNavbar] = useState(false);

    const linkStyles = (path: string) =>
        `pb-6 text-xl font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0 
        hover:bg-[#7f2d00] hover:text-white border-[#243353] 
        md:hover:text-[#e29b64] md:hover:bg-transparent 
        ${pathname === path ? 'text-[#e29b64]' : 'text-[#243353]'}`;

    return (
        <nav className="w-full fixed top-0 left-0 right-0 z-10 shadow-md shadow-bottom shadow-[#24335330] max-h-[100vh] md:max-h-16 bg-white py-2 relative">
            <div className="flex justify-between px-4 mx-auto  md:items-center md:flex md:px-8">

                <Link href="/" className='text-lg lg:text-2xl font-bold'>
                    LOGO
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}

                {/* NAVIGATION LINKS */}
                <div className={`flex-1 md:block ${navbar ? 'block p-12 md:p-0' : 'hidden'}`}>
                    <ul className="h-screen md:h-auto flex flex-col md:flex-row items-center  justify-start md:justify-end  mt-12 md:mt-0">
                        {navLinks.map(({ name, path }) => (
                            <li key={path} className={linkStyles(path)}>
                                <Link href={path} onClick={() => setNavbar(false)}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className="absolute md:hidden right-2 top-1 p-2" onClick={() => setNavbar(!navbar)}>
                <Image src={navbar ? '/assets/icons/close.svg' : '/assets/icons/menu.svg'} width={30} height={30} alt="menu" />
            </button>
        </nav>
    );
}

export default NavBar;