import React from 'react';

const TranslucentBox = ({ children, backgroundColor = 'rgba(255, 255, 255, 0.05)', borderRadius = '10px', padding = '20px', style = {} }) => {
    const boxStyle = {
        backgroundColor,
        borderRadius,
        padding,
        backdropFilter: 'blur(30px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        ...style,
    };

    return (
        <div style={boxStyle} className='text-white'>
            {children}
        </div>
    );
};

export default TranslucentBox;
