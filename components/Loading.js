import React from 'react'
import BarLoader from "react-spinners/BarLoader";

const Loading = () => {
    return (
        <div className='bg-black w-full h-screen flex flex-col   items-center justify-center'>
            <img className='loader-img w-24 h-24 mb-10' src="/img/apple.png" alt="" />
            <BarLoader color={"#fff"} size={140} />
        </div>
    )
}

export default Loading
