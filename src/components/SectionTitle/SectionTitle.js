import React from 'react';
import css from './SectionTitle.module.css';

const Section = ({ title, children }) => {
  return (
    
    <div className={css.section} >
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
