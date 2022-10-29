import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { useMutation } from "react-query";
import { UserContext } from "../../context/userContext";
import { API } from "../../pages/api/api";
import Button from "../button";
import Input from "../input";

export default function Login() {
  const [auth, setAuth] = useContext(UserContext);

  const router = useRouter();

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const email = user.email;
  //   const password = user.password;

  //   let status;
  //   if (email === "admin@mail.com") {
  //     status = "partner";
  //     router.push("/income-transaction");
  //   } else {
  //     status = "user";
  //     router.push("/");
  //   }

  //   const data = {
  //     email,
  //     password,
  //     status,
  //   };

  //   setAuth({
  //     type: "LOGIN",
  //     payload: data,
  //   });
  // };
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const config = {
        method: "POST",
        Headers: {
          "Content-Type": "aplication/json",
        },
      };
      const body = JSON.stringify(user);

      const response = await API.post("/login", body, config);
      console.log("data", response.data);

      if (response?.status === 200) {
        setAuth({
          type: "LOGIN",
          payload: response.data.data,
        });
        if (response?.data.data.role === "partner") {
          router.push("/income-transaction");
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.log("error", error);
      alert("Login Failed");
    }
  });

  return (
    <form onSubmit={(e) => handleSubmit.mutate(e)}>
      <h3 className='mb-4 text-5xl font-medium text-main '>Login</h3>
      <Input
        placeholder='Email'
        type='email'
        name='email'
        value={user.email}
        onChange={handleChange}
      />
      <Input
        placeholder='Password'
        type='password'
        name='password'
        value={user.password}
        onChange={handleChange}
      />
      <Button
        name='Login'
        type='submit'
        className='w-full bg-btn text-white rounded-lg py-2 my-5 hover:bg-main/70 active:bg-main'
      />
    </form>
  );
}
