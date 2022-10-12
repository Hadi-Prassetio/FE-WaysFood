import React from "react";

export default function Card({ children }) {
  return (
    <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-main/50  active:bg-main/70 cursor-pointer'>
      <div>
        <img class='rounded-lg w-full p-3' src='/ayam-geprek.svg' alt='' />
      </div>

      <div class='px-5'>
        <h5 class='mb-2 md:text-xl font-bold tracking-tight text-gray-900 '>
          Noteworthy technology acquisitions 2021
        </h5>

        <p class='mb-3 md:font-normal text-xs text-gray-700 '>
          Here are the biggest enterprise technology
        </p>
        <div>{children}</div>
      </div>
    </div>
  );
}
