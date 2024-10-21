/* eslint-disable react/prop-types */
'use client';
import React, { useState, useEffect } from 'react';

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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2YW0hTcRzHj7t7oaSHCkqQinyoB8PclVroDm0MiaLo4oUuT0WgaaldBOeDKwwqA2VYNM1Fdjcl2rp4rczs5jJKTWWb08070oVevnHWgoJJnqnziOcDHxjnx86+X3b4HfgTBAsLCwvLbNH+QC0cMGlj3OXqA+5r6otuk9riuqZucZs0nW6Txu02aX54pT53/p6pLW6TppD6zoBJG0PdI6Chu68oRX1lZEK/kSzrN5LjrlISU/S7y6iqchnjU1w3lGEzFnzYoFrYV6LMdZYox/oubcJM6KTuXaLMHbyqXjCt4R3F8r29RYqh3mIFAmKRYoj6zSkHb7+wSugoFJc7CsXw5di9JIzdTfI5mybLqQx+hW8xxPBtBdGVtrPrMJGjdxIxemfPhPNpsSC6kspCu0B3/pqTPfq1+Fsq7Ojt3f9cC4Td+jUnaBf4ols92JUXhb8dubULI7d2/nMtQA7QL5CzAkySoEtHdgSYJEGXz0eWNHxOXwom+Cl9ST3hDzGNOjBBwl/mbIFWGVdrlXMc93csx3G9BlsrDmKjJRvSuhyQ1enYb0jE+bRY1GxehHNpYuwzJIGszvDMN5qzsKXiII7ptajYHonr2yNxVK/FlopD2GA5DkldDlRVGUgxJONMqhRV5GKcTpUi2ZCM+KoMz3yDORsJ1w8hNT8Bxm0rYYkNs5vXh2gmXeCDnGO3yjlolXM9vpdz8U7GxVsZz+MbGQ+vPfLRIuPjlYyPZpkAzVIBXkoFaPIoxAupEM+lQjzzKEKjVIQGSokI9ZJg1EmCUeu1RhKCp16fSELxWByKR14t4jCYxWE2OgXAwAKYP/9Am4Krsco5dgYVsD2MDVETdPnZRoAJEv4yZwu0etco3UfoTZwA1l18fDrMQ4+OB2cRF4M3ORivDfpvyK9NQWg9LPT9CDFhjb6MF+LtbgE+pvHRlc+D8zIXw9UcfGsOQp+Ri0ZV8LSuUXYLNTFhC4WfigMTJPxltoOHz+sC/aWqZ64yEkywv4xsoF0gYIdYxZOTdoEZPevxQ4IuXXlR9lk4PoFPdVGTf4n9oTNzmaYjK8LekRWB2bQ9M8LWkb2c/juAhYWFhYWFmAP8Am1VLXDcxP8IAAAAAElFTkSuQmCC"></img>
                </button>

                {/* Dropdown visible only when `isMenuOpen` is true on small screens */}
                <Dropdown isOpen={isMenuOpen} />
        
            </div>
        </div>
    )
}