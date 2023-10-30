import { Link } from 'react-router-dom';
import image from '../assets/images/decor.jpeg';

const Banner1 = () => {
  return (
    <div className="container mb-16">
      <div className="flex justify-between overflow:hidden h-[550px] py-4">
        <div className="font-blinker w-[50%] flex flex-col bg-[#e9e9e9] justify-center px-32 max-lg:px-12 max-sm:w-full">
          <h2 className="font-semibold text-[32px]">
            Creative harmonious living
          </h2>
          <p className="text-[18px] my-2">
            RGS Products are all made to standard sizes so that you can mix and
            match them freely.
          </p>
          <button className="bg-black text-white text-lg py-2 font-semibold mt-2 w-[110px]">
            <Link to="/categories">SHOP NOW</Link>
          </button>
        </div>
        <div className="w-[50%] text-center max-sm:hidden">
          <img
            src={image}
            alt="img"
            className="object-cover h-[100%] w-[100%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
