import { Link } from 'react-router-dom';
import hamburger from '../assets/images/hamburger.svg';
import icon from '../assets/images/rgsblackout.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';
import Hamburger from './Hamburger';
import { useGlobalContext } from '../context';

const NavBar = () => {
  const { setShowCart, setShowMobileNav, cartItems } = useGlobalContext();

  return (
    <nav className="py-6 sticky top-0 z-10 w-full border-b-[2px] bg-white border-gray-200 shadow-sm">
      <div className="container px-8">
        <div className="flex items-center justify-between max-container font-blinker text-2xl">
          <Link to="/">
            <img src={icon} className="w-[85px] h-[60px]" alt="" />
          </Link>
          <ul className="flex-1 flex justify-end items-center gap-8 max-sm:hidden text-xl">
            <li className="hover:underline">
              <Link to="/categories">CATEGORIES</Link>
            </li>
            <li className="hover:underline">
              <Link to="/categories/products">PRODUCTS</Link>
            </li>
            <li className="cursor-pointer relative flex items-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="md"
                style={{ color: 'black' }}
                onClick={() => setShowCart((prevState) => !prevState)}
              />
              <div
                className="w-5 h-5 bg-red-500 text-white flex items-center justify-center rounded-full text-sm mb-6 cursor-pointer"
                onClick={() => setShowCart((prevState) => !prevState)}
              >
                {cartItems.length}
              </div>
            </li>
          </ul>

          <div className="hidden max-sm:flex">
            <div className="cursor-pointer relative flex items-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="sm"
                style={{ color: 'black' }}
                onClick={() => setShowCart((prevState) => !prevState)}
              />
              <div
                className="w-5 h-5 bg-red-500 text-white flex items-center justify-center rounded-full text-sm mb-6 cursor-pointer"
                onClick={() => setShowCart((prevState) => !prevState)}
              >
                {cartItems.length}
              </div>
            </div>
            <img
              className="ml-6 pb-1"
              src={hamburger}
              alt="hamburger icon"
              width={20}
              height={20}
              onClick={() => setShowMobileNav((prevState) => !prevState)}
            />
          </div>
        </div>
      </div>
      <Cart />
      <Hamburger />
    </nav>
  );
};

export default NavBar;
