import React, {useState, useEffect} from 'react'
import { songData } from '../../../data/songData'
import Player from './Player'

const PlayerApp = () => {
    const [song, setSong] = useState([
        {
            title: 'RainStorm',
            artist: 'April rain',
            img: './img/apple-music.png',
            song: 'http://soundbible.com/mp3/45min_april_rainstorm-mike-koenig.mp3'
        },
        {
            title: 'It is raining in the forest',
            artist: 'Rain Storm',
            img: './img/apple-music.png',
            song: 'http://soundbible.com/mp3/Upper Cut-soundBible.com-1272257235.mp3'
        },
    ])

    const [prevSong, setPrevSong] = useState(0)
    const [nextSong, setNextSong] = useState(prevSong + 1)

    useEffect(() => {
        setNextSong(() => {
            if(prevSong + 1 > song.length -1) {
                return 0;
            }else {
                return prevSong + 1;
            }
        })
    }, [prevSong])

    return (
        <div>
            <Player 
            prevSong={prevSong} 
            setPrevSong={setPrevSong} 
            nextSong={nextSong}
            song={song}
            />
        </div>
    )
}

export default PlayerApp
