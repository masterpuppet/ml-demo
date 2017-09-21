import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import './App.css';

const App = ({ route }) => {
  return (<div>
    <Helmet>
      <title>Mercado Libre - Demo</title>
      <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
      <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" />
    </Helmet>
    {renderRoutes(route.routes)}
  </div>);
}

export default App;
