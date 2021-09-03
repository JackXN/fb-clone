import React from 'react'
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
} from '@heroicons/react/outline';
import { session } from 'next-auth/client';


function Sidebar({Icon}) {
    return (
        <div className='p-2 mt-5 max-w[600px] xl:min-w-[300px]'>
            <SideBarRow src={session.user.image} title={session.user.name}/>
            <SidebarRow Icon={UsersIcon} title='friends'/>
            <SidebarRow Icon={UserGroupIcon} title='Groups'/>
            <SidebarRow Icon={ShoppingBagIcon} title='MarketPlace'/>
        </div>
    )
}

export default Sidebar
