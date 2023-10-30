import Trending from '../sections/Trending';
import product1 from '../assets/images/product1.jpg';
import { useGlobalContext } from '../context';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Notify from '../components/Notify';

const ProductPage = () => {
  const { productId } = useParams();
  const {
    selectedProduct,
    products,
    setSelectedProduct,
    navigate,
    handleIncrementButton,
    handleDecrementButton,
    setProductQuantity,
    productQuantity,
    setShowCart,
    cartItems,
    setCartItems,
  } = useGlobalContext();

  const [showNotify, setShowNotify] = useState(false);

  const addToCartButton = (selectedProductId) => {
    const existingCartItem = cartItems.find(
      (item) => item.id === selectedProductId
    );
    if (existingCartItem) {
      const updatedCartList = cartItems.map((item) =>
        item.id === existingCartItem.id
          ? { ...item, quantity: item.quantity + productQuantity }
          : item
      );
      setCartItems(updatedCartList);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartList));
      console.log('existing:', existingCartItem.id);
    } else {
      const updatedCartList = [
        ...cartItems,
        { ...selectedProduct, quantity: productQuantity },
      ];
      setCartItems(updatedCartList);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartList));
    }
  };

  const handleBuyNowButton = (selectedProductId) => {
    addToCartButton(selectedProductId);
    setShowCart((prevState) => !prevState);
  };

  useEffect(() => {
    if (!productId) {
      const product = products.find((product) => product.id === 1);
      navigate('/categories/products/1');
      setSelectedProduct(product);
      setProductQuantity(1);
    } else {
      const product = products.find((product) => product.id === +productId);
      if (product) {
        setSelectedProduct(product);
        setProductQuantity(1);
      }
    }
  }, [productId, products, setSelectedProduct]);

  return (
    <>
      <div className="container mb-12">
        {selectedProduct ? (
          <div className="font-blinker relative flex w-full justify-between py-3 max-md:flex-col">
            <h2 className="absolute left-[50%] text-center top-4 font-bold text-[32px] mb-6 translate-x-[-50%] max-md:w-full max-md:text-2xl">
              {selectedProduct.title}
            </h2>
            <div className="w-[50%] h-full max-md:w-full m-auto">
              <div className="flex justify-center pt-24 pb-6 px-6">
                <img
                  src={selectedProduct.image}
                  alt={product1}
                  className="w-[17rem] h-[20rem]"
                />
              </div>
            </div>
            <div className="h-full w-[50%] bg-[#e9e9e9] pt-40 pb-12 px-12 max-md:w-full max-md:p-4">
              <p className="text-[18px] my-2 mb-12 max-md:mb-6">
                {selectedProduct.description}
              </p>
              <div className="flex justify-between items-center gap-4 text-2xl font-semibold mb-12 max-md:flex-col max-md:mb-6">
                <p>Quantity</p>
                <div className="flex">
                  <button
                    className="bg-white border-solid border-[1px] border-black px-4 py-2"
                    onClick={handleDecrementButton}
                  >
                    -
                  </button>
                  <p className="border-solid border-y-[1px] border-black px-4 py-2">
                    {productQuantity}
                  </p>
                  <button
                    className="bg-white border-solid border-[1px] border-black px-4 py-2"
                    onClick={handleIncrementButton}
                  >
                    +
                  </button>
                </div>
                <p>${parseFloat(selectedProduct.price).toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-semibold gap-4 text-lg max-md:flex-col max-md:gap-1">
                <button
                  className="border-solid border-[2px] bg-black border-black text-white hover:bg-white hover:text-black transition-all duration-250 px-4 py-3 w-[50%] max-md:w-full"
                  onClick={() => {
                    addToCartButton(selectedProduct.id);
                    setShowNotify(true);
                  }}
                >
                  ADD TO CART
                </button>
                <button
                  className="text-white border-2 bg-red-800 border-red-800 hover:text-red-800 hover:bg-white transition-all duration-250 px-4 py-3 w-[50%] max-md:w-full"
                  onClick={() => handleBuyNowButton(selectedProduct.id)}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[20rem]">
            <div className="bg-neutral-500 text-white px-6 py-4 ">
              Product not found
            </div>
          </div>
        )}
      </div>
      {showNotify && (
        <Notify showNotify={showNotify} setShowNotify={setShowNotify} />
      )}
      <Trending />
    </>
  );
};

export default ProductPage;
