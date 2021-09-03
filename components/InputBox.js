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
                <form className='flex flex-1'>
                    <input type='text' placeholder={`Whats poppin ${session.user.name}`}></input>

                </form>
            </div>
        </div>
    )
}

export default InputBox
