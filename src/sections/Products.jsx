import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const Products = () => {
  const { products, handleProductClick } = useGlobalContext();
  const [frontPageProducts, setFrontPageProducts] = useState([]);

  const getFrontPageProducts = () => {
    const menClothingProducts = products
      .filter((product) => product.category === "men's clothing")
      .slice(1, 3);

    const womenClothingProducts = products
      .filter((product) => product.category === "women's clothing")
      .slice(0, 2);

    const electronicsProducts = products
      .filter((product) => product.category === 'electronics')
      .slice(0, 2);

    const jewelryProducts = products
      .filter((product) => product.category === 'jewelery')
      .slice(0, 2);

    const frontPageProducts = [
      ...jewelryProducts,
      ...electronicsProducts,
      ...menClothingProducts,
      ...womenClothingProducts,
    ];

    setFrontPageProducts(frontPageProducts);
  };

  useEffect(() => {
    getFrontPageProducts();
  }, [products]);

  return (
    <div className="container mb-16">
      <div>
        <h2 className="font-blinker font-semibold text-3xl mb-6">
          Products we are proud of
        </h2>
      </div>
      <div className="mt-18 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 grid-cols-2 gap-4">
        {frontPageProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 border-solid border-black/30 hover:border-neutral-600 transition-all duration-150 ease-in cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="flex items-center justify-center pt-5 px-2">
              <img
                alt={product.title}
                src={product.image}
                className="w-[150px] h-[185px]"
              />
            </div>
            <div className="px-2 py-4 flex flex-col">
              <div className="text-md my-3 max-md:text-md max-md:my-1">
                <p
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {product.title}
                </p>
              </div>
              <p className="font-semibold text-md md:text-lg">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
