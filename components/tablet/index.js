import React, { useRef, useEffect, useState } from "react";
import { gsap, Expo } from "gsap";
import moment from "moment";

import { useRouter } from "next/router";
import Weather from "./Weather";
import TabletApps from "./TabletApps";
import PlayerApp from "./Player";
import Calendar from "./Calendar";

const Mobile = () => {
  const mobileRef = useRef(null);
  const mobileImg = useRef(null);
  const mobileLock = useRef(null);
  const router = useRouter();

  const time = moment().format("LT");
  const date = moment().format("MMM Do YY");

  const lockOpen = () => {
    gsap.to(mobileRef.current, {
      x: 300,
      opacity: 0,
      duration: 0.5,
      Expo,
    });
    gsap.to(mobileImg.current, {
      filter: "blur(8px)",
      duration: 0.5,
      Expo,
    });
    gsap.to(mobileLock.current, {
      scale: 1.2,
      opacity: 1,
      duration: 0.7,
      Expo,
    });
  };

  return (
    <div>
      <div className="grid min-h-screen place-items-center">
        <div className="mx-auto h-full w-full bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-50 shadow-xl">
          <img
            ref={mobileImg}
            className="absolute inset-0 h-full w-full object-cover"
            src="https://wallpapershome.ru/images/pages/pic_h/23514.jpg"
          />
          <div className="relative">
            {/* <!-- Small icons on top right --> */}
            <div className="flex items-center justify-between mx-2 font-semibold text-2xl">
              <div className="mt-2 ml-3 text-white">{time}</div>
              <div className="mr-5 mt-2 flex justify-end space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
            </div>

            {/* <!-- Date & time --> */}
            <div className="tablet-date mt-20 flex flex-col items-center">
              <p className="tablet-date-time t-3 text-white text-7xl font-extralight">
                {time}
              </p>
              <p className="mt-1 text-white text-xl font-light">{date}</p>
            </div>

            <div className=" p-10">
              <div className="flex">
                  <Weather />
                  <div className="flex flex-col ml-8">
                    <TabletApps />
                    <PlayerApp />
                  </div>
              </div>
              
              <Calendar />
            </div>
          </div>

          {/* tablet bottom  */}
          <div className="tablet-bottom-apps absolute bottom-10 left-0 right-0 mx-10">
              <div className="backdrop-blur-sm bg-white/30 w-full h-24 rounded-xl">
              <div className='flex items-center justify-between mt-3 mx-16'>
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
               </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
