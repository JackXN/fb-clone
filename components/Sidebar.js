import React from 'react'
import SidebarRow from './SideBarRow';
import image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon, 
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    UsersIcon,
} from '@heroicons/react/solid';
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
    ShoppingBagIcon,
} from '@heroicons/react/outline';
import { session, loading } from 'next-auth/client';


function Sidebar({Icon,}) {
    return (
        <div className='p-2 mt-5 max-w[600px] xl:min-w-[300px]'>
    
            {/* <SidebarRow src={} title={session.name}/> */}
            <SidebarRow Icon={UsersIcon} title='friends'/>
            <SidebarRow Icon={UserGroupIcon} title='Groups'/>
            <SidebarRow Icon={ShoppingBagIcon} title='MarketPlace'/>
        </div>
    )
}

export default Sidebar
