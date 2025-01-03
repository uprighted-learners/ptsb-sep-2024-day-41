import React from 'react'

import "./Navigation.css"

export default function Navigation() {
    return (
        <div className='navigation-bar'>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
