/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon';
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
} from '@heroicons/react/outline';

function Header() {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            
            {/* Left Section */}
            <div className='flex items-center'>
                {/* Next.js image component optimizes the image and loads faster */}
                <Image src='https://links.papareact.com/5me'
                width={40}
                height={40}
                layout='fixed'
                />
            
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input className=' hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type='text' placeholder='Search'></input>
                </div>
            </div>
            
            {/* Center Section */}
<div className='flex justify-center flex-grow'>  {/* Flex grow lets the container grow if there is extra space available */}
    <div className='flex space-x-6 md:space-x-2'>
<HeaderIcon active Icon={HomeIcon} />
<HeaderIcon Icon={FlagIcon}/>
<HeaderIcon Icon={PlayIcon}/>
<HeaderIcon Icon={ShoppingCartIcon}/>
<HeaderIcon Icon={UserGroupIcon}/>
    </div>
</div>

            {/* Right  Section*/}
        <div>
            {/* Profile  */}
            <p className='whitespace-nowrap font-semibold pr-3'>Jack Rigan</p>
        </div>


        </div>
    )
}

export default Header
