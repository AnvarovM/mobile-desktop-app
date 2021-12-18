import React from 'react'
import {BsBookmark, BsChat, BsThreeDots, BsHeart, BsFillHeartFill, BsThreeDotsVertical} from "react-icons/bs"
import {HiOutlineEmojiHappy, HiOutlinePaperAirplane} from "react-icons/hi"

function Post({username, img, userImg, caption}) {
    const [heart, setHeart] = React.useState(false)
    return (
        <div className="bg-white my-7 border rounded-sm">
            <div className="flex items-center p-5">
                {/* header   */}
                <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3 cursor-pointer" src={userImg} alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <BsThreeDots className="h-5 cursor-not-allowed" />
            </div>

            {/* photo post */}
            <img className="object-cover w-full" src={img} alt="" />

            {/* Buttons heart airplane and  bookmark */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex items-center space-x-4">
                    <p onClick={() => setHeart(!heart)}>{heart ? <BsHeart className="btn" /> : <BsFillHeartFill className="btn text-red-500" />}</p>
                    <BsChat className="btn" />
                    <HiOutlinePaperAirplane className="btn rotate-45" />
                </div>
                <BsBookmark className="btn" />
            </div>

            {/* caption */}
            <div>
                <p className="p-5 truncate">
                    <span className="font-bold mr-1">{username}:  </span>
                    {caption}
                </p>
            </div>

            {/* comment  */}

            {/* input box */}
            <form className="flex items-center p-4">
                <HiOutlineEmojiHappy className="btn" />
                <input type="text" placeholder="Add a commene..." className="border-none flex-1 focus:ring-0 outline-none" />
                <button className="font-semibold text-blue-400">Post</button>
            </form>
        </div>
    )
}

export default Post
