import { useEffect, useState } from 'react';

export const useScrollDirection = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if we're at the top of the page
      setIsAtTop(currentScrollY === 0);

      // Compare current scroll position with last position
      setIsScrollingUp(currentScrollY < lastScrollY);

      // Update last scroll position
      lastScrollY = currentScrollY;
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Only return true for scrolling up if we're not at the top
  return {
    isScrollingUp: isScrollingUp && !isAtTop,
    isAtTop,
  };
};
