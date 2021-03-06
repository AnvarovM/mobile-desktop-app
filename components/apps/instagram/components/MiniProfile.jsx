import React from 'react';

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 object-contain rounded-full border p-[2px]"
        src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">anvarovm</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-sm text-blue-500 font-semibold">Sign out</button>
    </div>
  );
}

export default MiniProfile;
