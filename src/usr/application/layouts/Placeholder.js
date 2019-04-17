import React from 'react';

const padding = '1em';

const rootStyle = {
  position: 'absolute',
  top: padding,
  left: padding,
  right: padding,
  bottom: padding,
};

const placeholderStyle = {
  border: '1px dashed #dcdcdc',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5',
  width: '100%',
  height: '100%'
};

const Placeholder = ({ title }) => {
  return (
    <div style={rootStyle}>
      <div style={placeholderStyle}>
        <code>{title}</code>
      </div>
    </div>
  );
};

export default Placeholder;
