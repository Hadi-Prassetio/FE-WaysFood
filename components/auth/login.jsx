import Button from "../button";
import Input from "../input";

export default function Login() {
  return (
    <form typeof='submit'>
      <h3 className='mb-4 text-5xl font-medium text-main '>Login</h3>
      <Input placeholder='Email' type='text' />
      <Input placeholder='Password' type='password' />
      <Button
        name='Login'
        className='w-full bg-btn text-white rounded py-2 my-5 hover:bg-main active:bg-orange-500'
      />
    </form>
  );
}
