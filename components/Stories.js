import React from 'react'
import StoryCard from './StoryCard'


const stories = [
    {
        name:'Jack Rigan',
        src:'https://links.papareact.com/xql',
        profile:'https://links.papareact.com/snf',
    },
        {
        name: 'Bill Gates',
        src: 'https://links.papareact.com/4u4',
        profile: 'https://links.papareact.com/zvy',
    },
    {
        name: 'Jeff Bezos',
        src: 'https://links.papareact.com/k2j',
        profile: 'https://links.papareact.com/f0p'
    }
]


const Stories = () => {
    return (
    <div className='flex justify-center space-x-3 mx-auto'>
     {stories.map((story) => (
         <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
     ))}
    </div>
    );
}

export default Stories
