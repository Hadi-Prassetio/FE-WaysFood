import React from "react";

export default function Card() {
  return (
    <div class='max-w-sm my-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <div>
        <img class='rounded-lg w-full p-3' src='/ayam-geprek.svg' alt='' />
      </div>

      <div class='p-5'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Noteworthy technology acquisitions 2021
        </h5>

        <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}
