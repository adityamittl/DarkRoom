import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../assets/hero.svg';
import InspirationImg from '../assets/inspiration.svg';

export default function Home() {
    return (
        <div className="mx-28 text-fontColor pt-20 pb-12">

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className=''>
                    <h1 className='text-6xl'>Who <span className='text-blue-600 cursor-pointer'>we</span> are</h1>
                    <p className='text-xl py-4 tracking-wider'>DarkRoom is a web application that allows you to enter into the 3D world of the game Escape Room. Here users need to enter the room and see the 3D world of the game. The user can also interact with the 3D world and need to find the exit with the correct combination of the keys provided by the game by decoding the riddles.</p>
                    <Link to="/mystryRoom">
                        <button className='bg-blue-600 text-white py-2 px-8 rounded-md text-2xl'>Enter Room</button>
                    </Link>
                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="600" height="600" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 items-center pt-16'>

                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={InspirationImg} alt="img" width="600" height="600" />
                </div>

                <div className=''>
                    <h1 className='text-6xl'>What else do <span className='text-blue-600 cursor-pointer'>we</span> have</h1>
                    <p className='text-xl py-4 tracking-wider'>DarkRoom has tons of easter eggs and fun features. Unlock the secret parts of the game by solving the riddles and finding the exit and coming at the top of the leaderboard. And don't forget we have a special easter egg waiting especially for the Cyber Security enthusiast peeps.</p>
                </div>
            </div>

        </div>
    );
}
