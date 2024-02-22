import React, { useState, useEffect } from 'react';
import Button from './formComponents/Button';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-5 right-5'>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className=' bg-secondary hover:bg-secondary dark:bg-primary dark:hover:bg-primary text-black dark:text-white font-light !p-2 z-50'
          aria-label='Scroll to top'
        >
          <FiArrowUp className='text-2xl' />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
