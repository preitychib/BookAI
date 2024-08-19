import React from 'react';
import TranslucentBox from './TranslucentBox';

// const ShimmerText = ({ text }) => {
//   return (
//     <div className="relative inline-block text-4xl font-bold text-gray-900">
//       <span className="relative z-10">{text}</span>
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer opacity-75"></div>
//     </div>
//   );
// };

const ShimmerText = ({ text }) => {
    return (
      
        // <TranslucentBox>
    <div className="flex justify-center items-center">
      <div className="relative inline-block text-4xl font-bold font-tomatoesfont !text-white">
      <span className="relative z-10">{text}</span>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer opacity-75"></div> */}
    </div>
    </div>

        // </TranslucentBox>
  );
};

export default ShimmerText;

// Tailwind CSS Configuration (Inline)
const tailwindConfig = {
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
