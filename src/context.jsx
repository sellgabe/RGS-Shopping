import React, { useContext, useEffect, useState } from 'react';
import fakeStore from './apis/fakeStore';
import { useNavigate } from 'react-router-dom';

const AppContext = React.createContext();

const getCartItemsFromLocalStorage = () => {
  let cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    cartItems = JSON.parse(localStorage.getItem('cartItems'));
  } else {
    cartItems = [];
  }
  return cartItems;
};

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());
  const [productQuantity, setProductQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (url) => {
    try {
      const res = await fakeStore.get(`/${url}`);
      res.data ? setProducts(res.data) : setProducts([]);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const handleProductClick = (productId) => {
    const product = products.find((product) => product.id === productId);
    navigate(`/categories/products/${product.id}`);
    setSelectedProduct(product);
  };

  const handleIncrementButton = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const handleDecrementButton = () => {
    if (productQuantity < 2) return;
    setProductQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    fetchProducts('products');
  }, []);

  if (loading) return;

  return (
    <AppContext.Provider
      value={{
        products,
        fetchProducts,
        handleProductClick,
        navigate,
        selectedProduct,
        setSelectedProduct,
        handleProductClick,
        cartItems,
        handleIncrementButton,
        handleDecrementButton,
        setProductQuantity,
        productQuantity,
        setCartItems,
        setShowCart,
        showCart,
        setShowMobileNav,
        showMobileNav,
        setLoading,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
