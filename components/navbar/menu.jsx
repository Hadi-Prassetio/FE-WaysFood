import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import DropDown from "./dropdown";
import { useState } from "react";

export default function MenuUser() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Fragment>
      <div className='flex items-center'>
        <div>
          <Link href='/cart'>
            <Image
              src='/cart.svg'
              width={35}
              height={32.26}
              alt='cart'
              className='cursor-pointer'
            />
          </Link>
        </div>
        <div className='ml-5'>
          <button onClick={() => setShowDropdown(true)}>
            <Image
              src='/user.png'
              width={50}
              height={50}
              alt='user'
              className='rounded-full cursor-pointer'
            />
          </button>
        </div>

        <div className='hidden' id='dropDown'>
          <h1>test</h1>
        </div>
      </div>
      <DropDown isVisible={showDropdown} onClose={() => setShowDropdown(false)}>
        <Link href='/profile'>
          <div className='flex items-center mb-1 mr-10 ml-4 cursor-pointer'>
            <Image
              src='/profile.svg'
              alt='profile'
              width={33.37}
              height={39.95}
            />
            <p className='ml-2'>Profile</p>
          </div>
        </Link>
        <hr />
        <div className='flex items-center mt-1  mr-10 ml-4 cursor-pointer'>
          <Image src='/logout.svg' alt='profile' width={33.37} height={39.95} />
          <p className='ml-2'>Logout</p>
        </div>
      </DropDown>
    </Fragment>
  );
}
