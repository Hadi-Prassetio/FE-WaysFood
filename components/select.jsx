import React, { Children } from "react";

export default function Select({ children }) {
  return (
    <select className='w-full py-2 my-3 pl-1 bg-auth bg-opacity-25 rounded-md border-2 border-gray-400/70 focus:outline-none focus:ring focus:ring-main'>
      {children}
    </select>
  );
}
