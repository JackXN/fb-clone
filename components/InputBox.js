/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import { session, useSession } from 'next-auth/client'
import React from 'react'
import Image from 'next/image'

function InputBox() {
    const [session] = useSession();
    return (
        <div>
            <div>
                <Image
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
                layout='fixed'
                />
            </div>
        </div>
    )
}

export default InputBox
