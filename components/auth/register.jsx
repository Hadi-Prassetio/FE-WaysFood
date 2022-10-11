import Input from "../input";
import Button from "../button";
import Link from "next/link";

export default function Register() {
  return (
    <form typeof='submit'>
      <h3 className='mb-4 text-5xl font-medium text-main '>Register</h3>
      <Input placeholder='Email' type='text' />
      <Input placeholder='Password' type='password' />
      <Input placeholder='Fullname' type='text' />
      <Input placeholder='Gender' type='select' />
      <Input placeholder='Phone' type='number' />
      <Input placeholder='As User' type='select' />
      <Button
        name='Register'
        className='w-full bg-btn text-white rounded py-2 my-5 hover:bg-main active:bg-orange-500'
      />
      <p className='text-center text-pholder'>
        Already have an Account? klik <b className='cursor-pointer'>Here</b>
      </p>
    </form>
  );
}
