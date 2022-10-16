import Image from "next/image";
import { useContext, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Layout from "../components/layout";
import { CartContext } from "../context/cartContext";
import Rp from "rupiah-format";
import { useRouter } from "next/router";
import MapModal from "../components/map";

export default function Cart() {
  const [state, dispatch] = useContext(CartContext);
  const router = useRouter();

  const [map, setMap] = useState(false);

  return (
    <Layout pageTitle='Cart'>
      <div className='container max-w-6xl'>
        {state.cart?.length != null ? (
          <div>
            <div className='mt-10'>
              <h1 className='font-bold text-4xl mb-5 font-mainFont'>
                Geprek Bensu
              </h1>
              <p>Delivery Location</p>
              <div className='grid md:grid-cols-5 gap-4'>
                <div className='col-span-4'>
                  <Input placeholder='Location' />
                </div>
                <div className='col-span-1'>
                  <div
                    onClick={() => setMap(true)}
                    className='w-full md:py-2 py-1 bg-btn text-white my-3 rounded-lg flex justify-center hover:bg-main/70 active:bg-main cursor-pointer'>
                    <div className='mr-2'>Select On Map</div>
                    <img src='/map.svg' alt='map' />
                  </div>
                </div>
              </div>
            </div>
            <p>Review Your Order</p>
            <div className='grid md:grid-cols-3 md:gap-4'>
              <div className='md:col-span-2'>
                <div className='border-t-2 border-black mt-2 mb-2'></div>
                <div className='overflow-y-scroll scrollbar-hide h-[25rem]'>
                  {state.cart?.map((item) => (
                    <div key={item.id} className='grid grid-cols-2 my-1'>
                      <div className='flex my-auto'>
                        <img src={item.menuImage} width={150} height={150} />
                        <div className='ml-5 my-auto'>
                          <p className='font-bold font-mainFont'>
                            {item.menuName}
                          </p>
                          <button className='md:mr-3 md:text-xl active:bg-main/50 w-4 rounded'>
                            -
                          </button>
                          <p className='inline px-1 bg-main/50 rounded'>1</p>
                          <button className='md:ml-3 md:text-xl active:bg-main/50 w-4 rounded'>
                            +
                          </button>
                        </div>
                      </div>
                      <div className='grid justify-items-end  my-auto'>
                        <p className='text-red-600'>{Rp.convert(item.price)}</p>
                        <div className=' align-bottom active:bg-main/50 mt-5 rounded-full'>
                          <Image
                            src='/delete.svg'
                            width={20}
                            height={20}
                            alt='trash'
                          />
                        </div>
                      </div>
                      <div className='border-t-2 border-black mt-2 col-span-2'></div>
                    </div>
                  ))}
                </div>
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
                  className='w-full text-white bg-btn py-2 rounded-lg md:my-40 my-5 hover:bg-btn/80 active:bg-main/70'
                />
              </div>
            </div>
            <MapModal isVisible={map} onClose={() => setMap(false)}>
              <iframe
                width='100%'
                height='400px'
                id='gmap_canvas'
                src='https://maps.google.com/maps?q=Dumbways%20&t=&z=17&ie=UTF8&iwloc=&output=embed'
                frameborder='0'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
                title='myFrame'></iframe>
            </MapModal>
          </div>
        ) : (
          <div className='flex my-20 justify-center'>
            <img
              src='/empty.png'
              width={500}
              onClick={() => router.push("/")}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
