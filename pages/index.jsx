import Image from "next/image";
import { Fragment } from "react";
import Layout from "../components/layout";

export default function Home() {
  const islogin = true;

  return (
    <div>
      <Layout titleName='Home'>
        <div className='bg-main flex justify-center'>
          <div className='grid md:grid-cols-3 py-5  justify-items-center max-w-4xl container grid-cols-2'>
            <div className='inline-block mt-5 md:col-span-2'>
              <h1 className='md:text-5xl text-2xl font-bold text-txt '>
                Are you Hungry?
              </h1>
              <h1 className='md:text-5xl text-2xl font-bold text-txt'>
                Express Home Delivery
              </h1>
              <div className='md:grid grid-cols-3 gap-5 md:mt-10 '>
                <div className='border-t-4 border-txt mt-2'></div>
                <p className='md:text-sm text-xs col-span-2 align-text-top '>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis delectus eaque rem, mollitia maiores, quas
                  provident minima perferendis a distinctio quis excepturi error
                  corporis veritatis vel in dolore corrupti dignissimos.
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <img src='/pizza.svg' width={300} height={300} />
            </div>
          </div>
        </div>
        <div className='container max-w-6xl pt-5'>
          <h1 className='text-2xl font-bold pb-3'>Popular Restaurant</h1>
          <h1 className='text-2xl font-bold'>Restaurant Near You</h1>
        </div>
      </Layout>
    </div>
  );
}
