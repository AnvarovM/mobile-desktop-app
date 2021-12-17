import React, { useRef, useEffect, useState } from "react";
import { gsap, Expo } from "gsap";
import moment from "moment";

import { useRouter } from 'next/router'

const Mobile = () => {
  const mobileRef = useRef(null);
  const mobileImg = useRef(null);
  const mobileLock = useRef(null);
  const router = useRouter()

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
      <div className="grid min-h-screen bg-black place-items-center">
        <div className="mx-auto h-full w-full bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-50 shadow-xl">
          <img
            ref={mobileImg}
            className="absolute inset-0 h-full w-full object-cover"
            src="https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg"
          />
          <div className="absolute top-0 inset-x-0">
            <div className="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
          </div>
          <div className="relative">
            {/* <!-- Small icons on top right --> */}
            <div className="flex items-center justify-between mx-2">
              <div className="mt-2 ml-3 text-white">{time}</div>
              <div className="mr-5 mt-2 flex justify-end space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
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
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
            </div>

            {/* <!-- Date & time --> */}
            <div className="mt-2 flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </svg>
              <p className="mt-3 text-white text-6xl font-extralight">
                {" "}
                {time}{" "}
              </p>
              <p className="mt-1 text-white text-lg font-light">{date}</p>
            </div>
            <div>
              {/* <!-- Notification Summary --> */}
              <div ref={mobileRef} className="relative mt-4 mx-2">
                {/* <!-- Stacked panels (sitting below) --> */}
                <div className="absolute -bottom-4 scale-[0.85] origin-bottom inset-x-0 h-full w-full bg-white/10 backdrop-blur-md rounded-2xl"></div>
                <div className="absolute -bottom-2 scale-95 origin-bottom inset-x-0 h-full w-full bg-white/30 backdrop-blur-md rounded-3xl shadow-sm"></div>
                {/* <!-- Main, current panel --> */}
                <div className="p-4 bg-white/40 backdrop-blur-md rounded-3xl shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold">9:30 AM</p>
                      <h2 className="text-lg font-bold">
                        Your Morning Summary
                      </h2>
                    </div>
                    <span className="bg-gray-500 h-8 w-8 rounded-full text-white flex items-center justify-center">
                      11
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div>
                      <img
                        className="rounded-lg h-24 w-full object-cover"
                        src="https://images.unsplash.com/photo-1588974269162-4c0d5ccc6094?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3302&q=80"
                        alt="Surfer at sunset"
                      />
                      <h3 className="mt-2 text-xs font-bold leading-tight">
                        Surfing: heals the soul, kills the ribs
                      </h3>
                      <p className="mt-1 text-xs">
                        It's all fun and thrills until you get sucked over the
                        falls.
                      </p>
                    </div>
                    <div>
                      <img
                        className="rounded-lg h-24 w-full object-cover"
                        src="https://media.bleacherreport.com/image/upload/v1625368217/ilertc3nqs53klcp9xvx.jpg"
                        alt="CP3 vs the Greek Freak"
                      />
                      <h3 className="mt-2 text-xs font-bold leading-tight">
                        The NBA Finals are here!
                      </h3>
                      <p className="mt-1 text-xs">
                        Bucks vs Suns is shaping up to be a very intriguing
                        series!
                      </p>
                    </div>
                  </div>
                  <hr className="mt-4 border-black/20" />
                  <div className="mt-3 grid grid-cols-3 items-end">
                    <div className="col-span-2">
                      <h3 className="text-xs font-bold">More Updates</h3>
                      <p className="mt-0.5 text-xs">
                        Polywork, Keystone 6, and Sarah Drasner
                      </p>
                    </div>
                    <ul className="flex -space-x-4 flex-row-reverse space-x-reverse">
                      <li>
                        <img
                          className="h-8 w-8 rounded-xl object-cover"
                          src="https://seeklogo.com/images/K/keystonejs-logo-C77FDB0662-seeklogo.com.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          className="h-8 w-8 rounded-xl object-cover"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZUAlsS1loKxsx8abFEgwSi5KBus3tmsQaA&usqp=CAU"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          className="h-8 w-8 rounded-xl object-cover"
                          src="https://images.pexels.com/photos/9888291/pexels-photo-9888291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* lock screen numbers */}
          <div
            ref={mobileLock}
            className="lock absolute opacity-0 place-content-center transform scale-50 top-1/3 small:inset-x-16 xs:inset-x-28"
          >
            <div className="grid grid-cols-3 gap-4 gap-y-6 items-center">
              <div className="">
                <p className="lock-number-first">
                  1
                </p>
              </div>
              <div className="lock-number">
                <p className="text-xl font-semibold">2</p>
                <p className="text-xs">ABC</p>
              </div>
              <div className="lock-number">
                <p className="text-xl font-semibold">3</p>
                <p className="text-xs">DEF</p>
              </div>
              <div className="lock-number">
                <p className="text-xl font-semibold">3</p>
                <p className="text-xs">GHI</p>
              </div>
              <div className="lock-number">
                <p className="text-xl font-semibold">5</p>
                <p className="text-xs">JKL</p>
              </div>
              <div className="lock-number">
                <p className="text-xl font-semibold">6</p>
                <p className="text-xs">MNO</p>
              </div>
              <div className="lock-number">
                <p className="text-xl font-semibold">7</p>
                <p className="text-xs">PQRS</p>
              </div>
              <div className="lock-number">
                <p className="text-xl font-semibold">8</p>
                <p className="text-xs">TUV</p>
              </div>
              <div className="lock-number">
                <p className="text-xl font-semibold">9</p>
                <p className="text-xs">WXYZ</p>
              </div>
            </div>
          </div>

          <div onClick={() => router.push('/mobile')} className="absolute cursor-pointer bottom-14 right-0 left-0 text-xs text-white font-medium">
            <p className="text-center py-5 cursor-pointer animate-pulse">Click for enter without code</p>
          </div>

          {/* <!-- Flashlight, camera and bottom swipe menu --> */}
          <div className="absolute bottom-0 inset-x-0 h-20">
            <div className="px-10 flex justify-between">
              <button
                onClick={lockOpen}
                className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2 animate-pulse"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </button>
              <button className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-1 inset-x-0">
              <div className="mx-auto mb-1 h-1.5 w-28 rounded bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
