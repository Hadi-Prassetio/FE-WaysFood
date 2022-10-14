import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Select from "../select";

export default function Register() {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form);

  return (
    <form>
      <h3 className='mb-4 text-5xl font-medium text-main '>Register</h3>
      <Input
        placeholder='Email'
        type='text'
        name='email'
        onChange={handleChange}
      />
      <Input
        placeholder='Password'
        type='password'
        name='password'
        onChange={handleChange}
      />
      <Input
        placeholder='Fullname'
        type='text'
        name='fullname'
        onChange={handleChange}
      />
      <Input
        placeholder='Gender'
        type='text'
        name='gender'
        onChange={handleChange}
      />
      <Input
        placeholder='Phone'
        type='number'
        name='phone'
        onChange={handleChange}
      />
      <Select name='status' onChange={handleChange}>
        <option selected className=' hidden'>
          As User
        </option>
        <option value='user'> User</option>
        <option value='partner'> Partner</option>
      </Select>
      <Button
        name='Register'
        className='w-full bg-btn text-white rounded-lg py-2 my-5 hover:bg-main active:bg-orange-500'
      />
    </form>
  );
}
