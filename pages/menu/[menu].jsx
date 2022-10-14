import Card from "../../components/card";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Partners from "../../fakeData/restaurant";
import { useRouter } from "next/router";
import Rp from "rupiah-format";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

export default function Menu() {
  const [state, dispatch] = useContext(CartContext);
  const router = useRouter();
  const id = router.query.menu;

  const [cart, setCart] = useState([]);
  const addCart = (item) => {
    cart.push(item);
    dispatch({
      type: "ADD",
      cartData: cart,
    });
  };

  return (
    <Layout pageTitle='Menu'>
      <div className='container max-w-6xl '>
        <div className=' mt-10 mb-15 flex'>
          <img src={Partners[id]?.imageIcon} alt='logo' />
          <h1 className='md:text-4xl font-bold flex items-center ml-2'>
            {Partners[id]?.name}, Menus
          </h1>
        </div>
        <div className='grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-1 my-10'>
          {Partners[id]?.menus?.map((item, index) => (
            <div key={index}>
              <Card>
                <div>
                  <img
                    className='rounded-lg w-full p-3'
                    src={item.menuImage}
                    alt='menu'
                  />
                </div>

                <div className='px-5'>
                  <h5 className='mb-2 md:text-xl font-bold tracking-tight text-gray-900 '>
                    {item.menuName}
                  </h5>

                  <p className='mb-3 md:font-normal text-xs text-gray-700 '>
                    {Rp.convert(item.price)}
                  </p>
                  <div>
                    <Button
                      onClick={() => addCart(item)}
                      name='Order'
                      className='w-full bg-main text-txt rounded-xl md:py-2 py-1 my-2 hover:bg-base active:bg-gray-400'
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
