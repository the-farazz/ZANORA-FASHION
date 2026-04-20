import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartDrawer from './components/CartDrawer';
import './index.css';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <div className="bg-zanora-cream min-h-screen selection:bg-zanora-beige selection:text-zanora-black">
          <Navbar />
          <CartDrawer />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/category/:slug" element={<Home />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
