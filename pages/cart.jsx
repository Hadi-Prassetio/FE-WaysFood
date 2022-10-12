import Image from "next/image";
import Layout from "../components/layout";

export default function Cart() {
  return (
    <Layout pageName='Cart'>
      <div className='container max-w-6xl'>
        <p className='font-bold'>Review Your Order</p>
        <div className='grid md:grid-cols-3 md:gap-4'>
          <div className='md:col-span-2'>
            <div className='border-t-2 border-black mt-2'></div>
            <Image src='/nasi-goreng.svg' width={80} height={80} />
            <div>
              <p>Nasi Goreng</p>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
