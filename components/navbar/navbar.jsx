import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/userContext";
import Login from "../auth/login";
import Register from "../auth/register";
import Button from "../button";
import Modal from "../modal";
import Menu from "./menu";

export default function Navbar({ showLogin, setShowLogin }) {
  const [state, dispatch] = useContext(CartContext);
  const counter = state.cart?.length;

  const [auth, setAuth] = useContext(UserContext);
  const isLogin = auth.isLogin;

  // const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };
  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <Fragment>
      {/* {isLogin && setShowLogin(false)} */}
      <nav className=' bg-main sticky top-0'>
        <div className='flex justify-between items-center'>
          <div className='md:ml-10'>
            <Link
              href={
                auth.user.status === "partner" ? "/income-transaction" : "/"
              }>
              <Image
                src='/navicon.svg'
                width={124}
                height={40}
                alt='icon'
                className='cursor-pointer'
              />
            </Link>
          </div>
          <div className='md:mr-10 flex items-center'>
            {isLogin ? (
              <div>
                <div
                  className={
                    auth.user.status === "partner"
                      ? "hidden"
                      : counter === null
                      ? "hidden"
                      : counter === undefined
                      ? "hidden"
                      : counter === 0
                      ? "hidden"
                      : "circle z-40"
                  }>
                  {counter}
                </div>

                <Menu />
              </div>
            ) : (
              <>
                <Button name='Register' onClick={() => setShowRegister(true)} />
                <Button name='Login' onClick={() => setShowLogin(true)} />
                <Modal
                  isVisible={showLogin}
                  onClose={() => setShowLogin(false)}>
                  <Login />
                  <p className='text-center text-pholder'>
                    Don't have an Account? klik{" "}
                    <b className='cursor-pointer' onClick={switchToRegister}>
                      Here
                    </b>
                  </p>
                </Modal>
                <Modal
                  isVisible={showRegister}
                  onClose={() => setShowRegister(false)}>
                  <Register />
                  <p className='text-center text-pholder'>
                    Already have an Account? klik{" "}
                    <b className='cursor-pointer' onClick={switchToLogin}>
                      Here
                    </b>
                  </p>
                </Modal>
              </>
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
