import { useGlobalContext } from '../context';

const Trending = () => {
  const { products, handleProductClick } = useGlobalContext();

  const displayedProducts = products.slice(1, 7);

  return (
    <div className="container mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-blinker font-semibold text-3xl">Trending now</h2>
      </div>
      <div className="mt-18 pr-2">
        <div className="flex gap-4 overflow-x-scroll ">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="w-full border-2 border-solid border-black/30 hover:border-black transition-all duration-150 ease-in cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="flex items-center justify-center pt-2">
                <img
                  alt={product.title}
                  src={product.image}
                  className="min-w-[120px] h-[155px] p-2"
                />
              </div>
              <div className="px-2 pt-1 pb-2 flex flex-col">
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
    </div>
  );
};

export default Trending;
