import NavBar from './components/NavBar';
import Categories from './pages/Categories';
import FrontPage from './pages/FrontPage';
import ProductPage from './pages/ProductPage';
import { Routes, Route } from 'react-router-dom';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/categories/products" element={<ProductPage />} />
        <Route
          path="/categories/products/:productId"
          element={<ProductPage />}
        />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}
