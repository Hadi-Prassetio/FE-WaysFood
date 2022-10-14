import { useState } from "react";
import Button from "../button";
import Input from "../input";

export default function Login() {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  console.log(user);

  return (
    <form>
      <h3 className='mb-4 text-5xl font-medium text-main '>Login</h3>
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
      <Button
        name='Login'
        className='w-full bg-btn text-white rounded-lg py-2 my-5 hover:bg-main active:bg-orange-500'
      />
    </form>
  );
}
