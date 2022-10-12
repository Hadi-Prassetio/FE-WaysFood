import Navbar from "./navbar/navbar";
import Head from "next/head";

export default function Layout({ children, pageTitle }) {
  return (
    <div className='max-w-screen-2xl'>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/icon.svg' />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
