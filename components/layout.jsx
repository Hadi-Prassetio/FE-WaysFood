import Navbar from "./navbar/navbar";
import Head from "next/head";

export default function Layout({
  children,
  pageTitle,
  showLogin,
  setShowLogin,
}) {
  return (
    <div className='max-w-screen-2xl'>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/icon.svg' />
      </Head>
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
      <div>{children}</div>
    </div>
  );
}
