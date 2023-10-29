import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../context';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, setCartItems, setShowCart, showCart } = useGlobalContext();

  const [totalPrice, setTotalPrice] = useState(0);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      setShowCart((prev) => !prev);
    }
  };

  const handleIncrementBy1 = (selectedItem) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === selectedItem.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleDecrementBy1 = (selectedItem) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.quantity < 2) return cartItem;

      if (cartItem.id === selectedItem.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (selectedItemId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== selectedItemId
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const getTotalPrice = () => {
    const newTotalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    setTotalPrice(newTotalPrice);
  };

  useEffect(() => {
    getTotalPrice();
  }, [cartItems]);

  return (
    <div className="font-blinker">
      <div
        onClick={handleOverlayClick}
        className={`overlay fixed top-0 left-0 bg-[#00000075] h-full w-full z-40 ${
          showCart ? '' : 'hidden'
        }`}
      ></div>
      <div
        className={`bg-white z-50 flex flex-col w-[35rem] fixed h-screen p-10 top-0 transition-all duration-500 max-sm:w-full max-sm:p-6 ${
          showCart ? 'right-0' : '-right-full'
        }`}
      >
        <div className="flex justify-between mb-8">
          <p className="font-bold text-2xl">
            Shopping Cart ({cartItems.length})
          </p>
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            onClick={() => setShowCart((prev) => !prev)}
            className="cursor-pointer"
          />
        </div>

        <div className="h-[70%] overflow-y-scroll">
          {cartItems &&
            cartItems.map((item) => {
              return (
                <div
                  className="flex border-gray-200 border-b-2 rounded-sm justify-between h-[9rem] w-full"
                  key={item.id}
                >
                  <div className="w-[30%] flex justify-center items-center">
                    <img
                      src={item.image}
                      alt="product"
                      className=" w-[100px] h-[100px]"
                    />
                  </div>
                  <div className="w-[50%] h-full px-2 py-6 flex flex-col justify-between">
                    <p className="font-semibold flex justify-between ">
                      <span
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {item.title}
                      </span>
                    </p>
                    <div className="flex text-lg font-semibold">
                      <button
                        className="bg-black text-white border-solid border-[2px] border-black px-3"
                        onClick={() => handleDecrementBy1(item)}
                      >
                        -
                      </button>
                      <p className="border-solid border-y-[2px] text-[1rem]  border-black p-1 px-3">
                        {item.quantity}
                      </p>
                      <button
                        className="bg-black text-white border-solid border-[2px] border-black px-3"
                        onClick={() => handleIncrementBy1(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-[20%] h-full pb-6 flex flex-col justify-between text-right">
                    <span
                      className="pr-2 pt-1 cursor-pointer"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <FontAwesomeIcon icon={faXmark} size="lg" />
                    </span>
                    <p className="font-bold text-xl pr-2 max-sm:text-base">
                      ${parseFloat(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between w-full mt-2 items-center">
            <p className="text-2xl font-semibold">TOTAL:</p>
            <p className="text-3xl font-bold pb-1">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex flex-col w-full gap-1">
            <Link
              to="/RGS-Shopping/categories"
              className="border-solid border-[2px] bg-black border-black text-white hover:bg-white hover:text-black transition-all duration-250 text-xl px-4 py-2 font-semibold flex justify-center"
              onClick={() => setShowCart(false)}
            >
              CONTINUE SHOPPING
            </Link>
            <button className="text-white border-2 bg-red-800 hover:border-red-800 hover:text-red-800 hover:bg-white transition-all duration-250 text-xl px-4 py-2 font-semibold">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
