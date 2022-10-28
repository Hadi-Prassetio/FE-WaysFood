import Layout from "../components/layout";
import Input from "../components/input";
import { useState } from "react";
import { useMutation } from "react-query";
import { API } from "./api/api";

export default function AddProduct() {
  const [product, setProduct] = useState({});
  const [previewName, setPreviewName] = useState("");

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      setPreviewName(e.target.files[0].name);
    }
  };

  console.log(product);
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set("title", product.title);
      formData.set("price", product.price);
      formData.set("image", product.image[0], product.image[0].name);

      const response = await API.post("/product", formData);
      console.log(response);
    } catch (error) {
      console.log("errrror", error);
    }
  });

  return (
    <Layout pageTitle='Add Product'>
      <div className='container max-w-6xl'>
        <h1 className='font-bold text-3xl md:mt-20 mt-5 mb-10 font-mainFont'>
          Add Product
        </h1>
        <form onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className='grid md:grid-cols-12 md:gap-4'>
            <div className='md:col-span-9'>
              <Input
                placeholder='Title'
                type='text'
                name='title'
                onChange={handleChange}
              />
            </div>
            <div className='md:col-span-3 grid content-center'>
              <input
                type='file'
                id='image'
                hidden
                name='image'
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
            placeholder='Price'
            type='number'
            name='price'
            onChange={handleChange}
          />
          <div className='flex justify-end'>
            <button
              type='submit'
              className='md:w-1/5 w-20 py-1 bg-btn text-white my-3 rounded-lg text-center hover:bg-main/70 active:bg-main'>
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
