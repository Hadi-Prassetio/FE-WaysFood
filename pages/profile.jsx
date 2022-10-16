import React from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import Transaction from "../components/transaction";
import { useRouter } from "next/router";
import Income from "../fakeData/income";
import Rp from "rupiah-format";

export default function Profile() {
  const router = useRouter();

  return (
    <Layout pageTitle='Profile'>
      <div className='container max-w-6xl '>
        <div className='grid md:grid-cols-5 md:mt-20'>
          <div className='col-span-3'>
            <h1 className='font-bold md:text-4xl md:mb-10 font-mainFont'>
              My Profile
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
                onClick={() => router.push("/edit-profile")}
              />
            </div>
          </div>
          <div className='col-span-2'>
            <h1 className='font-bold md:text-4xl mb-10 font-mainFont'>
              My Transaction
            </h1>
            <div className='overflow-y-auto scrollbar-hide h-[17rem]'>
              {Income.map((item, index) => (
                <div key={index} className='my-1'>
                  <Transaction>
                    <div className='grid grid-cols-2'>
                      <div>
                        <h1 className='font-bold text-md font-mainFont text-lg'>
                          {item.products.restaurant}
                        </h1>

                        <h1 className='text-sm mb-5'>
                          <b>{item.day}, </b>
                          {item.date}{" "}
                        </h1>
                        <h1 className='font-bold text-md text-profile'>
                          Total : {Rp.convert(item.products.price)}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
