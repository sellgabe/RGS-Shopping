import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Hamburger = () => {
  const { setShowMobileNav, showMobileNav } = useGlobalContext();

  return (
    <div
      className={`bg-white  flex flex-col w-full fixed h-full p-10 top-0 transition-all duration-500 ${
        showMobileNav ? 'right-0' : '-right-full'
      }`}
    >
      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={faXmark}
          size="xl"
          onClick={() => setShowMobileNav((prevState) => !prevState)}
          className=""
        />
      </div>
      <div className="h-full w-full mt-[5rem]">
        <ul className="font-blinker text-center text-[35px] tracking-wide">
          <li
            className="hover:underline"
            onClick={() => setShowMobileNav((prevState) => !prevState)}
          >
            <Link to="/categories">CATEGORIES</Link>
          </li>
          <li
            className="hover:underline"
            onClick={() => setShowMobileNav((prevState) => !prevState)}
          >
            <Link to="/categories/products">PRODUCTS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
