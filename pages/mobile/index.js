import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { gsap, Expo, Elastic } from "gsap";

import {
  IoIosCellular,
  IoIosWifi,
  IoIosBluetooth,
  IoIosAirplane,
  IoIosPlay,
  IoIosSkipForward,
  IoIosSkipBackward,
  IoIosAppstore,
  IoIosMoon,
} from "react-icons/io";


import { IoVolumeHighOutline } from "react-icons/io5";
import { FiAirplay } from "react-icons/fi";
import { MdOutlineLightMode } from "react-icons/md";

const MobileApps = () => {
  const time = moment().format("LT");
  const router = useRouter();
  const bottomAppRef = useRef(null);
  const appsRef = useRef(null);
  const settingRef = useRef(null);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    gsap.from(bottomAppRef.current, {
      marginBottom: -200,
      opacity: 0,
      duration: 1,
      ease: Expo.easeOut,
    });
    gsap.to(appsRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: Expo.easeOut,
    });
  }, [bottomAppRef, appsRef]);

  const setting = () => {
    gsap.to(settingRef.current, {
      marginBottom: 100,
      opacity: 1,
      duration: 2,
      ease: Elastic.easeOut,
    })
  }
  return (
    <div>
      
      <div className="w-full h-screen bg-black">
      <div className="mx-auto h-full w-full bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-50 shadow-xl">
        {/* top --------------- */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg"
        />
        <div className="absolute top-0 inset-x-0">
          <div className="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
        </div>
        <div className="relative">
          {/* <!-- Small icons  --> */}
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
        </div>

            {/* app list------------ */}
            <div>
              <div
                ref={appsRef}
                className="absolute mx-4 xs:mx-8 my-10 opacity-0 transform scale-50"
              >

                <div className="flex justify-center mx-auto place-self-center flex-wrap small:gap-6 xs:gap-8 md:gap-10">
                  <div onClick={() => router.push('/instagram')} className="rounded-2xl w-12 xs:w-14 flex flex-col items-center text-white">
                    <img
                      src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
                      alt=""
                    />
                    <p className="text-xs mt-1.5">Instagram</p>
                  </div>
                  <div className="w-12 xs:w-14 flex flex-col items-center text-white">
                    <img
                      src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
                      alt=""
                    />
                    <p className="text-xs mt-1.5">Instagram</p>
                  </div>
                  <div className="w-12 xs:w-14 flex flex-col items-center text-white">
                    <img
                      src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
                      alt=""
                    />
                    <p className="text-xs mt-1.5">Instagram</p>
                  </div>
                  <div className="w-12 xs:w-14 flex flex-col items-center text-white">
                    <img
                      src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
                      alt=""
                    />
                    <p className="text-xs mt-1.5">Instagram</p>
                  </div>
                  <div className="w-12 xs:w-14 flex flex-col items-center text-white">
                    <img
                      src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
                      alt=""
                    />
                    <p className="text-xs mt-1.5">Instagram</p>
                  </div>
                  <div className="w-12 xs:w-14 flex flex-col items-center text-white">
                    <img
                      src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
                      alt=""
                    />
                    <p className="text-xs mt-1.5">Instagram</p>
                  </div>
                </div>

              </div>
            {/* settings ----------- */}
              <div ref={settingRef} className="absolute -bottom-32 left-8 opacity-0">
                  <div className="grid gap-2 grid-cols-2 grid-rows-3 items-center">
                    <div className="w-32 h-32 rounded-xl bg-gray-600 bg-opacity-50 p-2 grid grid-cols-2 grid-rows-2 place-items-center">
                      <div className="bg-gray-500 bg-opacity-50 h-10 w-10 rounded-full">
                        <IoIosAirplane className="mx-auto my-3 text-xl text-white" />
                      </div>
                      <div className="bg-gray-500 bg-opacity-50 h-10 w-10 rounded-full">
                        <IoIosCellular className="mx-auto my-3 text-xl text-white" />
                      </div>
                      <div className="bg-gray-500 bg-opacity-50 h-10 w-10 rounded-full">
                        <IoIosWifi className="mx-auto my-3 text-xl text-white" />
                      </div>
                      <div className="bg-gray-500 bg-opacity-50 h-10 w-10 rounded-full">
                        <IoIosBluetooth className="mx-auto my-3 text-xl text-white" />
                      </div>
                    </div>
                    <div className="w-32 h-32 rounded-xl bg-gray-600 bg-opacity-50">
                      <div className="flex flex-col items-center text-white pt-4">
                        <p className="font-medium">Green light</p>
                        <p className="font-light text-gray-500">Lorde</p>
                      </div>

                      <div className="flex items-center justify-center text-2xl text-white mt-5">
                        <IoIosSkipBackward />
                        <IoIosPlay className="text-4xl mx-2" />
                        <IoIosSkipForward />
                      </div>
                      <div></div>
                    </div>

                    <div className="w-32 h-32 grid gap-3 grid-rows-2">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl h-full w-full text-white text-3xl flex items-center justify-center bg-gray-600 bg-opacity-50 mx-auto">
                          <IoIosAppstore />
                        </div>
                        <div className="text-white text-3xl flex items-center justify-center rounded-xl w-full h-full bg-gray-600 bg-opacity-50">
                          <IoIosMoon />
                        </div>
                      </div>
                      <div className="rounded-xl flex items-center justify-center bg-gray-600 bg-opacity-50 w-full text-white space-x-2">
                        <FiAirplay className="text-xl" />
                        <p className="flex flex-col text-xs -leading-1 ">AirPlay <span>Mirroring</span> </p>
                      </div>
                    </div>

                    <div className="w-32 h-32 grid gap-3 grid-cols-2">
                      <div className="rounded-xl flex items-center  justify-center text-2xl bg-white bg-opacity-80 text-gray-500">
                        <IoVolumeHighOutline className="self-end mb-5" />
                      </div>
                      <div className="rounded-xl flex items-center  justify-center text-2xl bg-white bg-opacity-80 text-gray-500">
                        <MdOutlineLightMode className="self-end mb-5" />
                      </div>
                    </div>
                  </div>
              </div>
            </div>

        {/* bottom apps--------- */}
        <div
          ref={bottomAppRef}
          className="absolute bottom-5 left-0 right-0 place-items-center w-6/10 h-[4.5rem] items-center mx-4 rounded-xl bg-gray-500 bg-opacity-50"
        >
          <div className="grid grid-cols-4 small:gap-6 xs:gap-8 xs:ml-10 md:ml-32 lg:ml:40 mt-2 items-center md:gap-10 mx-4">
            <div
              
              className="relative w-14 cursor-pointer"
            >
              <img onClick={() => router.push("/mobile/call")} className="rounded-lg cursor-pointer" src="/img/call-logo.png" alt="" />
              <span className="absolute top-0 right-0 h-5 w-5 text-white flex items-center justify-center text-xs rounded-lg bg-[#f72e22]">
                4
              </span>
            </div>
            <div className="relative w-12 h-12 cursor-pointer">
              <img
                className="rounded-lg"
                src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
                alt=""
              />
            </div>
            <div className="relative w-12 cursor-pointer">
              <img onClick={() => router.push('/mobile/chat')}
                className="rounded-xl"
                src="/img/sms.png"
                alt=""
              />
              <span className="absolute top-0 right-0 h-5 w-5 text-white flex items-center justify-center text-xs rounded-lg bg-[#f72e22]">
                2
              </span>
            </div>
            <div onClick={setting} className="relative w-14">
              <img
                className=" rounded-lg cursor-pointer"
                src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default MobileApps;
