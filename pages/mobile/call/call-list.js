import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { callData } from "../../../data/callData";
import moment from "moment";
import { gsap, Expo, Power4 } from "gsap";
import { AiFillMinusCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";

const icons = [
  AiFillMinusCircle,
  AiFillMinusCircle,
  AiFillMinusCircle,
  AiFillMinusCircle,
  AiFillMinusCircle,
  AiFillMinusCircle,
];

const CalList = () => {
  const time = moment().format("LT");
  const date = moment().format("MMM Do YY");

  const router = useRouter();

  const bottomRef = useRef(null);
  const contactRef = useRef(null);
  const trashRef = useRef(null);

  const [allOrMissed, setAllOrMissed] = useState(false);

  useEffect(() => {
    gsap.from(bottomRef.current, {
      marginBottom: -200,
      duration: 0.8,
      Expo,
    });
  }, [bottomRef, contactRef, trashRef]);

  const clear = () => {
    gsap.to(contactRef.current, {
      x: 1200,
      opacity: 0,
      duration: 3,
      Expo,
    });
    gsap.to(trashRef.current, {
      y: -200,
      opacity: 1,
      duration: 2,
      Expo,
    });
  };

  const contact = () => {
    gsap.fromTo(
      contactRef.current,
      {
        opacity: 0,
      },
      { opacity: 1 }
    );
  };

  return (
    <div className="">
      {/* iphone mockup */}
      <div className="grid min-h-screen place-items-center">
        <div className="mx-auto h-full w-full  rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-50 shadow-xl">
          <div className="absolute top-0 inset-x-0">
            <div className="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
          </div>
          <div className="relative">
            {/* <!-- Small icons on top right --> */}
            <div className="flex items-center justify-between mx-2">
              <div className="mt-2 ml-3 p-[4px] bg-[#11ce1f] rounded-2xl text-xs text-white">
                {time}
              </div>
              <div className="mr-5 mt-2 flex justify-end space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
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
                  className="h-4 w-4 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
            </div>
            <div></div>
          </div>

          <div className="px-6 py-8">
            <div className="flex item-center justify-between">
              <p onClick={clear} className="text-blue-500">
                Clear
              </p>

              <div
                onClick={contact}
                className="p-1 bg-gray-200 rounded-lg text-sm"
              >
                <span
                  onClick={() => setAllOrMissed(!allOrMissed)}
                  className={
                    allOrMissed
                      ? "py-1 p-6 rounded-lg bg-white"
                      : "py-1 p-6 rounded-lg"
                  }
                >
                  All
                </span>
                <span
                  onClick={() => setAllOrMissed(!allOrMissed)}
                  className={
                    allOrMissed
                      ? "py-1 p-4 rounded-lg"
                      : "py-1 p-4 rounded-lg bg-white"
                  }
                >
                  Missed
                </span>
              </div>
              <p
                onClick={() => router.push("/mobile/call")}
                className="text-blue-500 font-semibold"
              >
                Done
              </p>
            </div>

            <div>
              <h1 className="text-xl font-bold py-2">Recents</h1>
            </div>

            <div ref={contactRef} className="">
              {callData.map((item, index) => {
                const Icon = icons[index];
                return (
                  <div className="py-3 flex border-t">
                    <Icon className="text-2xl text-[#ff3a31]" />

                    <div className="pl-4 flex-1">
                      <p className="text-lg font-medium">{item.username}</p>
                      <p className="text-base font-light text-gray-500">
                        {item.phone}
                      </p>
                    </div>

                    <p className="text-base font-light text-gray-500">
                      {item.time}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              ref={trashRef}
              className="flex flex-col items-center justify-center text-red-500 opacity-0"
            >
              <GoTrashcan className="text-6xl" />
              <p className="text-xs mt-4">Thrown into the trash</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-8 right-4 left-4 place-content-center items-center px-8">
        <div className="grid grid-cols-5 small:gap-6 xs:gap-8 md:gap-10 items-center">
          <div className="flex flex-col items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs">Favorites</span>
          </div>
          <div
            onClick={() => router.push("/mobile/call/call-list")}
            className="flex flex-col items-center text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-xs">Recents</span>
          </div>
          <div
            onClick={() => router.push("/mobile/call/contact")}
            className="flex flex-col items-center text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-xs">Contacts</span>
          </div>
          <div onClick={() => router.push("/mobile/call")} className="flex flex-col items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs">Keypad</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-xs">Email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalList;
