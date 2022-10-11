import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Login from "../auth/login";
import Register from "../auth/register";
import Button from "../button";
import Modal from "../modal";
import Dropdown from "./dropdown";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const isLogin = false;

  return (
    <Fragment>
      <div className=' bg-main '>
        <div className='flex justify-between items-center'>
          <div className='md:ml-10'>
            <Link href='/'>
              <Image
                src='/navicon.svg'
                width={124}
                height={40}
                className='cursor-pointer'
              />
            </Link>
          </div>
          <div className='md:mr-10 flex items-center'>
            {isLogin ? (
              <Dropdown />
            ) : (
              <>
                <Button name='Login' onClick={() => setShowLogin(true)} />
                <Button name='Register' onClick={() => setShowRegister(true)} />
              </>
            )}
          </div>
        </div>
      </div>
      <Modal isVisible={showLogin} onClose={() => setShowLogin(false)}>
        <Login />
      </Modal>
      <Modal isVisible={showRegister} onClose={() => setShowRegister(false)}>
        <Register />
      </Modal>
    </Fragment>
  );
}
