import React from 'react'
import { useMediaQuery } from 'react-responsive';

const Screen = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  
    return (
      <div className="p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">Responsive Header</h1>
  
        <div className="mt-4">
          {/* Mobile Layout */}
          {isMobile && (
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-lg">Mobile Layout</h2>
              <p>This layout is for small screen sizes.</p>
            </div>
          )}
  
          {/* Tablet Layout */}
          {isTablet && !isMobile && (
            <div className="bg-green-500 text-white p-4">
              <h2 className="text-xl">Tablet Layout</h2>
              <p>This layout is for tablet screen sizes.</p>
            </div>
          )}
  
          {/* Desktop Layout */}
          {!isMobile && !isTablet && (
            <div className="bg-red-500 text-white p-4">
              <h2 className="text-2xl">Desktop Layout</h2>
              <p>This layout is for desktop screen sizes.</p>
            </div>
          )}
        </div>
      </div>
  )
}

export default Screen
