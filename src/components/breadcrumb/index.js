import React from 'react';

import './breadcrumb.css';

const Breadcrumb = ({ breadcrumbs = [] }) => (
  <nav className="breadcrumb ml-breadcrumb" aria-label="breadcrumbs">
    <ul>
    {breadcrumbs.map((breadcrumb, index) => <li key={index}><a>{breadcrumb}</a></li>)}
    </ul>
  </nav>
);

export default Breadcrumb;
