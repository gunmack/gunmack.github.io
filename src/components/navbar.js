'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const links = [
    { name: '🏠 Home ', href: '/', key: 'home' },
    { name: '🧑🏾 About me ', href: 'about', key: 'about' },
    { name: '🖥️ Projects ', href: '#', key: 'projects' },
    { name: '📄 Resume ', href: '#', key: 'resume' },
    { name: '📁 Other work ', href: 'https://www.gunmack.dev/', key: 'other_work'},
];

function Dropdown({isOpen}){
    return(
        <div className={`dropdown ${isOpen ? 'block' : 'hidden'} 
        sm:`}>
            <div>
                {links.map(({ name, href, key }) => (
                    <a
                        key={key}
                        className="dropdown_list"
                        href={href}                        
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default function Navbar({ page }){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <div>
            <div className="navbar">
                <div className="hidden sm:flex">
                    {links.map(({ name, href, key }) => (
                        <a
                            key={key}
                            className={`nbar_items ${page === key ? 'active' : ''}`}
                            href={href}
                            target={key === 'other_work' ? '_blank' : '_self'}
                        >
                            {name}
                        </a>
                    ))}
                </div>

                {/* Hamburger menu for small screens */}
                <button
                className="sm:hidden nbar_items"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Image 
                    src="/images/burger-menu-icon-vector.jpg" alt="logo" 
                    width={20} height={2} className="rounded-lg">
                    </Image>
                </button>

                {/* Dropdown visible only when `isMenuOpen` is true on small screens */}
                <Dropdown isOpen={isMenuOpen} />
        
            </div>
        </div>
    )
}