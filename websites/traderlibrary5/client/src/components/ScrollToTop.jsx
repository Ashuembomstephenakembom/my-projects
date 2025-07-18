import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // Delay scroll so it happens after render
  }, [pathname]);

  return null;
};

export default ScrollToTop; 