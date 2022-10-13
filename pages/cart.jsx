import Image from "next/image";
import Button from "../components/button";
import Input from "../components/input";
import Layout from "../components/layout";

export default function Cart() {
  return (
    <Layout pageTitle='Cart'>
      <div className='container max-w-6xl'>
        <div className='mt-10'>
          <h1 className='font-bold text-4xl mb-5'>Geprek Bensu</h1>
          <p>Delivery Location</p>
          <div className='grid md:grid-cols-5 gap-4'>
            <div className='col-span-4'>
              <Input />
            </div>
            <div className='col-span-1'>
              <button className='w-full py-2 bg-btn text-white my-3 rounded-lg flex justify-center hover:bg-main/70 active:bg-main'>
                Select On Map
                <img src='/map.svg' alt='map' />
              </button>
            </div>
          </div>
        </div>
        <p>Review Your Order</p>
        <div className='grid md:grid-cols-3 md:gap-4'>
          <div className='md:col-span-2'>
            <div className='border-t-2 border-black mt-2 mb-2'></div>
            <div className='grid grid-cols-2 '>
              <div className='flex my-auto'>
                <img src='/menu1.svg' width={150} height={150} />
                <div className='text-center ml-5 my-auto'>
                  <p className='font-bold'>Nasi Goreng</p>
                  <button className='md:mr-3 md:text-xl active:bg-main/50 w-4'>
                    -
                  </button>
                  <p className='inline'>1</p>
                  <button className='md:ml-3 md:text-xl active:bg-main/50 w-4'>
                    +
                  </button>
                </div>
              </div>
              <div className='grid justify-items-end  my-auto'>
                <p className='text-red-600'>Rp. 5000</p>
                <div className='mr-5 align-bottom active:bg-main/50 pt-5'>
                  <Image src='/delete.svg' width={20} height={20} alt='trash' />
                </div>
              </div>
            </div>
            <div className='border-t-2 border-black mt-2'></div>
          </div>
          <div>
            <div className='border-t-2 border-black mt-2'></div>
            <div className='flex justify-between'>
              <div>
                <p>Subtotal</p>
                <p>Qty</p>
                <p>Ongkir</p>
              </div>
              <div>
                <p className='text-red-600'>Rp. 5000</p>
                <p className='text-red-600'>1</p>
                <p className='text-red-600'>Rp. 5000</p>
              </div>
            </div>
            <div className='border-t-2 border-black mt-2'></div>
            <div className='flex justify-between'>
              <p className='text-red-600 font-bold'>Total</p>
              <p className='text-red-600 font-bold'>Rp. 10.000</p>
            </div>
            <Button
              name='order'
              className='w-full text-white bg-btn py-2 rounded-lg my-40 hover:bg-btn/80 active:bg-main/70'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}