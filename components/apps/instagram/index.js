import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import Feeding from "./components/Feeding";

const Instagram = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid min-h-screen place-items-center">
        <div className="mx-auto h-screen w-full overflow-y-scroll scrollbar-hide rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-50 shadow-xl px-2">
          {/* Header */}
          <Header />

          {/* Feeding */}
          <Feeding />

          {/* Modal */}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
