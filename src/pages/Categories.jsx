import { useEffect, useState } from 'react';
import Trending from '../sections/Trending';
import fakeStore from '../apis/fakeStore';
import { useGlobalContext } from '../context';
import { useParams } from 'react-router-dom';

const Categories = () => {
  const { handleProductClick, navigate, setLoading } = useGlobalContext();
  const { category } = useParams();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  const fetchCategoryProducts = async (url) => {
    try {
      const res = await fakeStore.get(url);
      setCategoryProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      fetchCategoryProducts('/products');
    } else {
      fetchCategoryProducts(`/products/category/${category}`);
    }
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (category === undefined) {
      handleCategoryClick('all');
    } else {
      handleCategoryClick(category);
    }
  }, [category]);

  return (
    <>
      <div className="container font-blinker mb-12">
        <div className="mt-8">
          <div className="flex justify-evenly  items-center px-2 gap-8 mt-4 mb-8 max-sm:flex-col max-sm:gap-2">
            <button
              className={`filter-btn ${
                selectedCategory === 'all' ? 'font-semibold border-black' : ''
              }`}
              onClick={() => handleCategoryClick('all')}
            >
              All
            </button>
            <button
              onClick={() => handleCategoryClick('electronics')}
              className={`filter-btn ${
                selectedCategory === 'electronics'
                  ? 'font-semibold border-black'
                  : ''
              }`}
            >
              Electronics
            </button>
            <button
              onClick={() => handleCategoryClick('jewelery')}
              className={`filter-btn ${
                selectedCategory === 'jewelery'
                  ? 'font-semibold border-black'
                  : ''
              }`}
            >
              Jewelry
            </button>
            <button
              onClick={() => handleCategoryClick("men's clothing")}
              className={`filter-btn ${
                selectedCategory === "men's clothing"
                  ? 'font-semibold border-black'
                  : ''
              }`}
            >
              Men's clothes
            </button>
            <button
              onClick={() => handleCategoryClick("women's clothing")}
              className={`filter-btn ${
                selectedCategory === "women's clothing"
                  ? 'font-semibold border-black'
                  : ''
              }`}
            >
              Women's clothes
            </button>
          </div>
        </div>
        <div className="mt-18 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 grid-cols-2 gap-4">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="border-2 border-solid border-black/30 hover:border-black transition-all duration-150 ease-in cursor-pointer"
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
                  <div
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {product.title}
                  </div>
                </div>
                <p className="font-semibold text-md md:text-lg">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Trending />
    </>
  );
};

export default Categories;
