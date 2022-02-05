import React from 'react';
import WinnerImg from '../assets/winner.svg';
import { auth } from '../services/firebase'

export default function Leaderboard() {
    return (
        <div className="md:mx-28 mx-8 text-fontColor pt-8 md:pt-20 pb-12">

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className='tracking-wider'>
                    <h1 className='text-3xl md:text-6xl'><span className="text-blue-600">Top</span> scorers:</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>Find all hidden clues and top the leaderboard</p>
                    <ol className='list-decimal text-xl md:text-2xl'>
                        <li>Aakash Gupta</li>
                        <li>Aditya Mittal</li>
                        <li>Harshal Raikwar</li>
                    </ol>
                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={WinnerImg} alt="img" width="600" height="600" />
                </div>
            </div>
        </div>
    );
}
