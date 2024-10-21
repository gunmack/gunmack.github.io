'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const links = [
    { name: '🏠 Home ', href: '/', key: 'home' },
    { name: '🧑🏾 About me ', href: 'about', key: 'about' },
    { name: '🖥️ Projects ', href: 'projects', key: 'projects' },
    { name: '📃 Resume ', href: '#', key: 'resume' },
    { name: '📁 Other work ', href: 'https://www.gunmack.dev/', key: 'other_work'},
    { name: '☾☀︎', href: '#', key: 'dark-mode'},
];

function darkmode() {
    if (typeof window !== 'undefined'){
        if (document.body.classList.contains('dark-mode')) {
            // If currently in dark mode, switch to light mode
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light'); // Save the preference
        } else {
            // If currently in light mode, switch to dark mode
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Save the preference
        }
    }
}

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
                        target={key === 'other_work' ? '_blank' : '_self'}
                        onClick={key === 'dark-mode' ? darkmode : null}                        
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    )
}

function LightDark(){
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.add('light-mode'); // Default to light mode
            }
        }
    }, []);
}

export default function Navbar({ page }){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <div>
            <LightDark />
            <div className="navbar">
                <div className="hidden sm:flex">
                    {links.map(({ name, href, key }) => (
                        <a
                            key={key}
                            className={`nbar_items ${page === key ? 'active' : ''}`}
                            href={href}
                            target={key === 'other_work' ? '_blank' : '_self'}
                            onClick={key === 'dark-mode' ? darkmode : null}
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