// import { useGlobalContext } from '../context';

// const ProductCard = () => {
//   const { products } = useGlobalContext();

//   return (
//     <>
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="border-2 border-solid border-black/30 hover:border-black transition-all duration-150 ease-in cursor-pointer"
//         >
//           <div className="flex items-center justify-center pt-5">
//             <img
//               alt={product.title}
//               src={product.image}
//               className="w-[150px] h-[185px]"
//             />
//           </div>
//           <div className="px-2 py-4 flex flex-col">
//             <div className="text-md my-3 max-md:text-md max-md:my-1">
//               <div
//                 style={{
//                   display: '-webkit-box',
//                   WebkitLineClamp: 1,
//                   overflow: 'hidden',
//                   textOverflow: 'ellipsis',
//                   WebkitBoxOrient: 'vertical',
//                 }}
//               >
//                 {product.title}
//               </div>
//             </div>
//             <p className="font-semibold text-md md:text-lg">
//               ${product.price.toFixed(2)}
//             </p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default ProductCard;
