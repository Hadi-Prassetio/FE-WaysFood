import Input from "../components/input";
import Layout from "../components/layout";

export default function EditProfile() {
  return (
    <Layout pageTitle='Edit Profile'>
      <div className='container max-w-6xl'>
        <h1 className='font-bold text-3xl md:mt-20 mt-5 mb-10'>Edit Profile</h1>
        <div className='grid md:grid-cols-12 md:gap-4'>
          <div className='md:col-span-10'>
            <Input placeholder='Full name' type='text' />
          </div>
          <div className='md:col-span-2'>
            <Input />
          </div>
        </div>
        <Input placeholder='Email' type='email' />
        <Input placeholder='Phone' type='number' />
        <div className='grid md:grid-cols-5 md:gap-4 grid-cols-3 gap-2'>
          <div className='md:col-span-4 col-span-2'>
            <Input />
          </div>
          <div className='md:col-span-1'>
            <button className='w-full md:py-2 py-1 bg-btn text-white my-3 rounded-lg flex justify-center hover:bg-main/70 active:bg-main'>
              Select On Map
              <img src='/map.svg' alt='map' />
            </button>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='md:w-1/5 w-20 py-1 bg-btn text-white my-3 rounded-lg text-center hover:bg-main/70 active:bg-main'>
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
}
