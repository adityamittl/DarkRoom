import React, { useState, useRef } from 'react'
import { HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import HeroImg from '../assets/hero.svg';
import InspirationImg from '../assets/inspiration.svg';

export default function Home() {

    const [showCode, setShowCode] = React.useState(false);
    const ref = useRef(null);

    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);

    const getInputValue = (e) => {
        e.preventDefault();

        const userValue = ref.current.value;

        if (userValue === "A11i5W3LL") {
            setValid(true);
            setMessage("You won, here is your reward");

        }
        else if (userValue !== "A11i5W3LL") {
            setValid(false);
            setMessage("Wrong code, keep trying");
        }
        // else {
        // setValid(false);
        // setMessage("You lost, try again");
        // }

    }

    return (
        <div className="md:mx-28 mx-4 text-fontColor pt-8 md:pt-20 pb-12">

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who <span className='text-blue-600 cursor-pointer' onDoubleClick={() => setShowCode(true)}>we</span> are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>DarkRoom is a web application that allows you to enter into the 3D world of the game Escape Room. Here users need to enter the room and see the 3D world of the game. The user can also interact with the 3D world and need to find the exit with the correct combination of the keys provided by the game by decoding the riddles.</p>

                    {showCode ? (
                        <div>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative my-6  w-96">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-gray-800 bg-secondary outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                            <div className="text-3xl font-base tracking-wide cursor-pointer">
                                                You found a secret!
                                            </div>

                                            <button className="absolute right-6" onClick={() => setShowCode(false)} aria-label="button">
                                                <HiX className="h-7 w-7" aria-hidden="false" />
                                            </button>

                                        </div>

                                        <div className="grid justify-center">
                                            <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                        </div>

                                        <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                                        >
                                            <p className=''>You found a secret 🥳🥳!!</p>
                                            <p className=''>Fill the code below and get a surprise!!</p>

                                            <div className="mt-4 outline-transparent outline grid place-items-center mx-12">
                                                <input placeholder="Type the code here" type="text" ref={ref} onChange={getInputValue} className="block w-full pb-2 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                                                <div className='text-center'>
                                                    {message && <div>
                                                        <p className={valid ? "text-green-500 " : "text-red-400"} >{message}</p>
                                                        <a href="https://c.tenor.com/rtnshG9YFykAAAAM/rick-astley-rick-roll.gif" target="_blank" className={valid ? "block" : "hidden"} >
                                                            <button className='bg-blue-600 my-2 text-white py-2 px-8 rounded-md ml-2'>
                                                                Claim reward
                                                            </button>
                                                        </a>
                                                    </div>}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                        </div>
                    ) : null}

                    <Link to="/mystryRoom">
                        <button className='bg-blue-600 text-white py-2 px-8 rounded-md text-xl md:text-2xl'>Enter Room</button>
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
                    <h1 className='text-3xl md:text-6xl'>What else do <span className='text-blue-600 cursor-pointer' onDoubleClick={() => setShowCode(true)}>we</span> have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>DarkRoom has tons of easter eggs and fun features. Unlock the secret parts of the game by solving the riddles and finding the exit and coming at the top of the leaderboard. And don't forget we have a special easter egg waiting especially for the Cyber Security enthusiast peeps.</p>
                </div>
            </div>

        </div>
    );
}
