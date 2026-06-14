import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ChatBot from '../ChatBot';
import WhatsAppFAB from '../WhatsAppFAB';
import CustomCursor from '../CustomCursor';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show loader on initial page load
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <CustomCursor />
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
          <ChatBot />
          <WhatsAppFAB />
        </>
      )}
    </>
  );
};

export default Layout;
