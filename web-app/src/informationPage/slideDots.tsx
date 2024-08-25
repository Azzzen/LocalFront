import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';

interface SlideDotsProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const SlideDots: React.FC<SlideDotsProps> = ({ containerRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const screenWidth = window.innerWidth;
      const index = Math.round(scrollPosition / screenWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [containerRef]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        position: 'fixed',
        bottom: 20,
        width: '100%',
      }}
    >
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <Box
          key={index}
          sx={{
            width: 12,
            height: 12,
            margin: '0 5px',
            borderRadius: '50%',
            backgroundColor: index === activeIndex ? '#green.main' : '#ccc',
            transition: 'background-color 0.3s ease',
          }}
        />
      ))}
    </Stack>
  );
};

export default SlideDots;
