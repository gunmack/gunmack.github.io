/* eslint-disable react/prop-types */
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


// use local storage to save the theme preference
function darkmode() {
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'light'); 
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        } else {
            localStorage.setItem('theme', 'dark'); 
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
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
                        onClick={key === 'dark-mode' ? darkmode : null} rel="noreferrer"                        
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    )
}

function LightDark(){
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }  
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode') // Default to light mode
        localStorage.setItem('theme', 'light');
    }

    document.body.classList.add('show');
}

export default function Navbar({ page }){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {LightDark()}, []);
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
                            onClick={key === 'dark-mode' ? darkmode : null} rel="noreferrer"
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