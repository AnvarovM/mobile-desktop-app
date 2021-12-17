import React, {useState} from 'react'
import { songData } from '../../data/songData'

const Player = () => {
    const [song, setSong] = useState([songData])
    const [prevSong, setPrevSong] = useState(0)
    const [nextSong, setNextSong] = useState(prevSong + 1)
    return (
        <div>
            
        </div>
    )
}

export default Player
