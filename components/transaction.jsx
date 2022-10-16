import React from "react";

export default function Transaction() {
  return (
    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md p-5 cursor-pointer'>
      <div className='grid grid-cols-2'>
        <div>
          <h1 className='font-bold text-md font-mainFont text-lg'>
            Geprek Bensu
          </h1>

          <h1 className='text-sm mb-5'>
            <b>Saturday, </b>12 March
          </h1>
          <h1 className='font-bold text-md text-profile'>Total : Rp. 20.000</h1>
        </div>
        <div className='grid justify-items-end'>
          <img src='/navicon.svg' alt='' />
          <h1 className='w-3/4 rounded-md bg-base text-green-600 text-center my-auto py-1'>
            Finished
          </h1>
        </div>
      </div>
    </div>
  );
}
