import { useState } from "react";
import Input from "../components/input";
import Layout from "../components/layout";

export default function EditProfilePartner() {
  const [profile, setProfile] = useState({});
  const [previewName, setPreviewName] = useState("");

  const handleChange = (e) => {
    setProfile({
      ...profile,

      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.type === "file") {
      setPreviewName(e.target.files[0].name);
    }
  };

  return (
    <Layout pageTitle='Edit Profile Partner'>
      <div className='container max-w-6xl'>
        <h1 className='font-bold text-3xl md:mt-20 mt-5 mb-10'>
          Edit Profile Partner
        </h1>
        <form>
          <div className='grid md:grid-cols-12 md:gap-4'>
            <div className='md:col-span-9'>
              <Input
                placeholder='Name Partner'
                type='text'
                name='fullname'
                onChange={handleChange}
              />
            </div>
            <div className='md:col-span-3 grid content-center'>
              <input
                type='file'
                id='image'
                hidden
                name='profileImg'
                onChange={handleChange}
              />
              <label
                htmlFor='image'
                className='w-full p-2 grid grid-cols-2 bg-auth bg-opacity-25 rounded-lg border-2 border-gray-400/70'>
                <div>{previewName === "" ? "Attach Image" : previewName}</div>
                <div className='grid justify-end'>
                  <img src='/pin.svg' width={15} />
                </div>
              </label>
            </div>
          </div>
          <Input
            placeholder='Email'
            type='email'
            name='email'
            onChange={handleChange}
          />
          <Input
            placeholder='Phone'
            type='number'
            name='phone'
            onChange={handleChange}
          />
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
