/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'

function Header() {
    return (
        <div>
            
            {/* Left */}
            <div>
                {/* Next.js image component optimizes the image and loads faster */}
                <h1>Hello</h1>
                <Image src='https://links.papareact.com/5me'
                width={40}
                height={40}
                layout='fixed'
                />
                <div>
                    <input type='text' placeholder='Search'></input>
                </div>
            </div>
            
            {/* Center */}


            {/* Right */}
        </div>
    )
}

export default Header
