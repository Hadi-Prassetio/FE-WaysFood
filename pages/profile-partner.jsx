import Layout from "../components/layout";
import Button from "../components/button";
import { useRouter } from "next/router";
import Transaction from "../components/transaction";

export default function ProfilePartner() {
  const router = useRouter();

  return (
    <Layout>
      <div className='container max-w-6xl '>
        <div className='grid md:grid-cols-5 md:mt-20'>
          <div className='col-span-3'>
            <h1 className='font-bold md:text-4xl md:mb-10 font-mainFont'>
              Profile Partner
            </h1>
            <div className='grid grid-cols-3 gap-4'>
              <div>
                <img src='/user.png' alt='user' />
              </div>
              <div className='grid col-span-2'>
                <div className='grid content-center'>
                  <h1 className='font-bold text-profile text-2xl'>Fullname</h1>
                  <p>Hadi Prassetio</p>
                </div>
                <div className='grid content-center'>
                  <h1 className='font-bold text-profile text-2xl'>Email</h1>
                  <p>hadiprassetio516@gmail.com</p>
                </div>
                <div className='grid content-end'>
                  <h1 className='font-bold text-profile text-2xl'>Phone</h1>
                  <p>0895609135718</p>
                </div>
              </div>
              <Button
                name='Edit Profile'
                className='w-full py-3 rounded-lg bg-btn hover:bg-main/50 active:bg-main/80 text-white mt-5'
                onClick={() => router.push("/edit-profile-partner")}
              />
            </div>
          </div>
          <div className='col-span-2'>
            <h1 className='font-bold md:text-4xl mb-10 font-mainFont'>
              History Order
            </h1>
            <div className='overflow-y-auto h-[16.5rem]'>
              <Transaction>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='font-bold text-md font-mainFont text-lg'>
                      Hadi prassetio
                    </h1>

                    <h1 className='text-sm mb-5'>
                      <b>Saturday, </b>12 March
                    </h1>
                    <h1 className='font-bold text-md text-profile'>
                      Total : Rp. 20.000
                    </h1>
                  </div>
                  <div className='grid justify-items-end'>
                    <img src='/navicon.svg' alt='' />
                    <h1 className='w-3/4 rounded-md bg-base text-green-600 text-center my-auto py-1'>
                      Finished
                    </h1>
                  </div>
                </div>
              </Transaction>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
