import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Card from "../components/card";
import Layout from "../components/layout";
import { UserContext } from "../context/userContext";
import Partner from "../fakeData/restaurant";

export default function Home() {
  const router = useRouter();
  const [auth, setAuth] = useContext(UserContext);

  const [showLogin, setShowLogin] = useState(false);
  const loginFirst = () => setShowLogin(true);

  return (
    <Layout pageTitle='Home' showLogin={showLogin} setShowLogin={setShowLogin}>
      <div className='bg-main flex justify-center'>
        <div className='grid md:grid-cols-3 py-5  justify-items-center max-w-4xl container grid-cols-2'>
          <div className='inline-block mt-5 md:col-span-2'>
            <h1 className='md:text-5xl text-2xl font-bold text-txt font-mainFont'>
              Are you Hungry?
            </h1>
            <h1 className='md:text-5xl text-2xl font-bold text-txt  font-mainFont'>
              Express Home Delivery
            </h1>
            <div className='md:grid grid-cols-3 gap-5 md:mt-10 '>
              <div className='border-t-4 border-txt mt-2'></div>
              <p className='md:text-sm text-xs col-span-2 align-text-top font-mainFont'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis delectus eaque rem, mollitia maiores, quas
                provident minima perferendis a distinctio quis excepturi error
                corporis veritatis vel in dolore corrupti dignissimos.
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <img src='/pizza.svg' width={300} height={300} alt='pizza' />
          </div>
        </div>
      </div>
      <div className='container max-w-6xl mt-10'>
        <h1 className='text-2xl font-bold pb-3  font-mainFont'>
          Popular Restaurant
        </h1>
        <div className='grid md:grid-cols-4 md:gap-3 grid-cols-2 gap-1 my-8'>
          {Partner?.map((item) => (
            <div
              key={item.id}
              onClick={
                !auth.isLogin
                  ? loginFirst
                  : () => router.push(`/menu/${item.id}`)
              }
              className='flex p-6 max-w-sm bg-white rounded-lg border
              border-gray-200 shadow-md hover:bg-main/50 active:bg-main/70
              cursor-pointer'>
              <img src={item.imageIcon} alt='' />
              <h1 className='mb-2 md:text-2xl font-bold tracking-tight text-gray-900 mx-3 flex items-center font-mainFont'>
                {item.name}
              </h1>
            </div>
          ))}
        </div>
        <h1 className='md:text-2xl font-bold pb-3 font-mainFont'>
          Restaurant Near You
        </h1>
        <div className='grid md:grid-cols-4 md:gap-3 grid-cols-2 gap-1 my-8'>
          {Partner?.map((item) => (
            <div
              key={item.id}
              onClick={
                !auth.isLogin
                  ? loginFirst
                  : () => router.push(`/menu/${item.id}`)
              }>
              <Card>
                <div>
                  <img
                    className='rounded-lg w-full p-3'
                    src={item.menus[0]?.menuImage}
                    alt='menu'
                  />
                </div>

                <div className='px-5'>
                  <h5 className='mb-2 md:text-xl font-bold tracking-tight text-gray-900 font-mainFont'>
                    {item.menus[0]?.menuName}
                  </h5>

                  <p className='mb-3 md:font-xl text-xs text-gray-700 '>
                    {item.location}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className='grid md:grid-cols-4 md:gap-3 my-8 grid-cols-2 gap-1'></div>
      </div>
    </Layout>
  );
}
