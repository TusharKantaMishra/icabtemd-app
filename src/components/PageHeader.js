import React from 'react';
import '../styles/PageHeader.css';

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeader;
