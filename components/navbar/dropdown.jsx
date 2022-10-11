import Image from "next/image";
import Link from "next/link";

export default function Dropdown() {
  return (
    <div className='flex items-center'>
      <div>
        <Link href='/cart'>
          <Image
            src='/cart.svg'
            width={35}
            height={32.26}
            className='cursor-pointer'
          />
        </Link>
      </div>
      <div className='ml-5'>
        <button data-dropdown-toggle='dropDown' id='dropDownButton'>
          <Image
            src='/user.png'
            width={50}
            height={50}
            className='rounded-full cursor-pointer'
          />
        </button>
      </div>

      <div className='hidden' id='dropDown'>
        <h1>test</h1>
      </div>
    </div>
  );
}
