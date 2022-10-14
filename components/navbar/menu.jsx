import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import DropDown from "./dropdown";

export default function MenuUser() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Fragment>
      <div className='flex items-center'>
        <div className=''>
          <Link href='/cart'>
            <Image
              src='/cart.svg'
              width={35}
              height={32.26}
              alt='cart'
              className='cursor-pointer '
            />
          </Link>
        </div>
        <div className='ml-5'>
          <button onClick={() => setShowDropdown(true)}>
            <img
              src='/user.png'
              width={50}
              height={50}
              alt='user'
              className='rounded-full cursor-pointer z-0'
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
        <Link href='/profile-partner'>
          <div className='flex items-center mb-1 mr-10 ml-4 cursor-pointer'>
            <Image
              src='/profile.svg'
              alt='profile'
              width={33.37}
              height={39.95}
            />
            <p className='ml-2'>Profile Partner</p>
          </div>
        </Link>
        <Link href='/add-product'>
          <div className='flex items-center mb-1 mr-10 ml-4 cursor-pointer'>
            <Image
              src='/product.svg'
              alt='profile'
              width={33.37}
              height={39.95}
            />
            <p className='ml-2'>Add Product</p>
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
