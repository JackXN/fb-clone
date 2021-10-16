/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import {useSession } from 'next-auth/client'
import Image from 'next/image'
import { VideoCameraIcon, EmojiHappyIcon, CameraIcon } from '@heroicons/react/solid';
import React, {useState} from 'react';
import { useRef } from 'react';





function InputBox() {
    const [session] = useSession();
    const inputRef = useRef(null);
const [input, setInput] = useState('');


const sendPost = (e) => {
    e.preventDefault();

    if(!inputRef.target.value) return;

    db.collection('posts').add ({
        message: inputRef.current.value
    })

}


// const handleChange = (e) => {
//     e.preventDefault();
//     setInput(e.target.value)
//     // console.log(e.target.value)
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
// setInput([
//     ...input,
//     {message: input, name: session.user.name, email: session.user.email, image: session.user.image}
// ]);

// }



// if(!inputRef.current.value) return;




    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
                layout='fixed'
                />
                <form className='flex flex-1'>
                    <input 
                    type='text'
                     placeholder={`Whats poppin ${session.user.name}`}
                     className='rounded-full h-12 bg-gray-50 flex-grow px-5 focus:outline-none'
                    onClick={sendPost}
                     />
                </form>
            </div>

            <div>


<div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>

                    <div className='inputIcon'>
                        <EmojiHappyIcon className='h-7 text-yellow-300'/>
                        <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                    </div>

                    <div className='inputIcon'>
                        <CameraIcon className='h-7 text-yellow-300'/>
                        <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                        </div>                    

                        </div>
            </div>

        </div>
    )
}

export default InputBox
