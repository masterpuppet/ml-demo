import React from 'react';
import Header from '../containers/header';

const Layout = (props) => (
  <div>
    <Header />
    <main>
      <div className="container ml-container">
        {props.children}
      </div>
    </main>
    <footer></footer>
  </div>
);

export default Layout;
