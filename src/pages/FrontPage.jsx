import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import Banner1 from '../sections/Banner1';
import Banner2 from '../sections/Banner2';
import Products from '../sections/Products';
import Trending from '../sections/Trending';

const FrontPage = () => {
  const { fetchProducts } = useGlobalContext();

  useEffect(() => {
    fetchProducts('products');
  }, []);

  return (
    <div className="container font-blinker mb-12">
      <Banner1 />
      <Products />
      <Banner2 />
      <Trending />
    </div>
  );
};

export default FrontPage;
