import Input from "../components/input";
import Layout from "../components/layout";

export default function EditProfilePartner() {
  return (
    <Layout pageTitle='Edit Profile Partner'>
      <div className='container max-w-6xl'>
        <h1 className='font-bold text-3xl md:mt-20 mt-5 mb-10'>
          Edit Profile Partner
        </h1>
        <form>
          <div className='grid md:grid-cols-12 md:gap-4'>
            <div className='md:col-span-10'>
              <Input placeholder='Name Partner' type='text' />
            </div>
            <div className='md:col-span-2'>
              <Input />
            </div>
          </div>
          <Input placeholder='Email' type='email' />
          <Input placeholder='Phone' type='number' />
          <div className='grid md:grid-cols-5 gap-4'>
            <div className='md:col-span-4'>
              <Input placeholder='Location' />
            </div>
            <div className='md:col-span-1'>
              <button className='w-full py-2 bg-btn text-white my-3 rounded-lg flex justify-center hover:bg-main/70 active:bg-main'>
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
        </form>
      </div>
    </Layout>
  );
}
