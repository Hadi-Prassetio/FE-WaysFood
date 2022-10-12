import Card from "../components/card";
import Layout from "../components/layout";
import Button from "../components/button";
import Partners from "../fakeData/restaurant";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const data = Partners[parseInt(router.query)];

  return (
    <Layout pageTitle='Menu'>
      <div className='container'>
        <div className=' mt-10 mb-15'>
          <h1 className='md:text-5xl text-2xl text-bold text-txt'></h1>
        </div>
        <div className='grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-1 my-20'>
          <Card>
            <Button
              name='Order'
              className='w-full bg-main text-txt rounded-md md:py-2 py-1 my-2 hover:bg-base active:bg-gray-400'
            />
          </Card>
          <Card>
            <Button
              name='Order'
              className='w-full bg-main text-txt rounded-md md:py-2 py-1 my-2 hover:bg-base active:bg-gray-400'
            />
          </Card>
        </div>
      </div>
    </Layout>
  );
}
