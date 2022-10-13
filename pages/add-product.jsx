import Layout from "../components/layout";
import Input from "../components/input";

export default function AddProduct() {
  return (
    <Layout pageTitle='Add Product'>
      <div className='container max-w-6xl'>
        <h1 className='font-bold text-3xl md:mt-20 mt-5 mb-10'>Add Product</h1>
        <div className='grid md:grid-cols-12 md:gap-4'>
          <div className='md:col-span-10'>
            <Input placeholder='Title' type='text' />
          </div>
          <div className='md:col-span-2'>
            <Input />
          </div>
        </div>
        <Input placeholder='Price' type='number' />
        <div className='flex justify-end'>
          <button className='md:w-1/5 w-20 py-1 bg-btn text-white my-3 rounded-lg text-center hover:bg-main/70 active:bg-main'>
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
}
