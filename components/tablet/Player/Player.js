import React, { useEffect, useState, useRef } from 'react'
import PlayerDetails from './PlayerDetails'
import {
    IoIosPlay,
    IoIosSkipForward,
    IoIosSkipBackward,
    IoIosPause,
  } from "react-icons/io";

const Player = ({ song, nextSong, setPrevSong, prevSong }) => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying){
            audioRef.current.play();
        }else{
            audioRef.current.pause();
        }
    });

    return (
        <div className='flex backdrop-blur-sm bg-white/30 mt-4 h-60 p-6l text-white px-6 rounded-xl'>
            <div className='flex justify-center'>
                <img className='w-44 h-44 my-auto object-cover' src={song[nextSong].img} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center mx-auto'>
                <audio ref={audioRef} src={song[prevSong].song}></audio>
                <p className='text-2xl font-medium'>{song[nextSong].artist}</p>
                <p className='text-xl font-light'>{song[nextSong].title}</p>
                <div className="flex items-center justify-center text-2x my-2">
                        <IoIosSkipBackward  />
                        <div onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <IoIosPause className="text-4xl mx-2" /> : <IoIosPlay className="text-4xl mx-2" />}
                        </div>
                        <IoIosSkipForward />
                      </div>
            </div>
        </div>
    )
}

export default Player
