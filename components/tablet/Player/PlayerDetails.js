import React from 'react'

const PlayerDetails = ({ song }) => {
    return (
        <div>
            <div>
                <img className='w-24' src={song.img} alt="" />
            </div>
            <h3>{song.src}</h3>
        </div>
    )
}

export default PlayerDetails
