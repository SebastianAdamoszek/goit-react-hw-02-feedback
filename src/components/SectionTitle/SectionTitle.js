import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
