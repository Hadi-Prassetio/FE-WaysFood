import { useState } from "react";
import Input from "../components/input";
import Layout from "../components/layout";
import MapModal from "../components/map";

export default function EditProfilePartner() {
  const [profile, setProfile] = useState({});
  const [previewName, setPreviewName] = useState("");

  const [map, setMap] = useState(false);

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
        <h1 className='font-bold text-3xl md:mt-20 mt-5 mb-10 font-mainFont'>
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
              <div
                onClick={() => setMap(true)}
                className='w-full md:py-2 py-1 bg-btn text-white my-3 rounded-lg flex justify-center hover:bg-main/70 active:bg-main'>
                <div className='mr-2 cursor-pointer'>Select On Map</div>
                <img src='/map.svg' alt='map' />
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <button className='md:w-1/5 w-20 py-1 bg-btn text-white my-3 rounded-lg text-center hover:bg-main/70 active:bg-main'>
              Save
            </button>
          </div>
        </form>
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
    </Layout>
  );
}
