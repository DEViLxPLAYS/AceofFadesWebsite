import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import DealsPage from './pages/Deals/DealsPage';
import FAQPage from './pages/FAQ/FAQPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
