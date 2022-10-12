import Button from "../button";
import Input from "../input";
import Select from "../select";

export default function Register() {
  return (
    <form typeof='submit'>
      <h3 className='mb-4 text-5xl font-medium text-main '>Register</h3>
      <Input placeholder='Email' type='text' />
      <Input placeholder='Password' type='password' />
      <Input placeholder='Fullname' type='text' />
      <Input placeholder='Gender' type='select' />
      <Input placeholder='Phone' type='number' />
      <Select>
        <option selected className=' hidden'>
          As User
        </option>
        <option value='user'> User</option>
        <option value='partner'> Partner</option>
      </Select>
      <Button
        name='Register'
        className='w-full bg-btn text-white rounded py-2 my-5 hover:bg-main active:bg-orange-500'
      />
    </form>
  );
}
