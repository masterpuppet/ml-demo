import React from 'react';
import { IntlProvider } from 'react-intl';
import { setAddon, storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import JSXAddon from 'storybook-addon-jsx';
import Item from '../src/components/item';
import Items from '../src/components/items';
import ShippingIcon from '../src/components/items/shipping';
import i18n from '../src/i18n';

setAddon(JSXAddon);

const model = {
  id: 'MLA682991421',
  title: 'Mercedes Benz C280 V6 Elegance Anticipo Y Cuotas Descrip (e)',
  description: 'PRECIO DE LISTA O PERMUTA:$417,600PRECIO CONTADO:$389,125FINANCIACIÓN:$200,000 en 36 cuotas de $8200CUOTAS FIJA EN PESOS CON DNI.CUPO LIMITADO.TOMAMOS TU USADO.ATENCIÓN PERSONALIZADAMEJORAMOS CUALQUIER PRESUPUESTOTEST DRIVER DISPONIBLE PERMANENTEMENTE EN SALONFORMAS DE PAGO: CONTADO O A través de PSA FINANCE, financiera de Peugeot Argentina.***CONSULTE POR OTROS ADICIONALES Y OTROS MODELOS CON BONIFICACION! ***Email: ezequiel0km@financier.comCEL: 15-5992-4647 (Whatsapp)',
  picture: 'http://mla-s1-p.mlstatic.com/936631-MLA25710568434_062017-I.jpg',
  condition: 'used',
  sold_quantity: 0,
  price: {
    amount: 220000,
    currency: 'ARS',
    decimals: 0
  },
  free_shipping: true
};
const withShipping = [model];
const withoutShipping = [Object.assign({}, model, { free_shipping: false })];

storiesOf('Item', module)
  .addWithJSX('Default', () => (
    <IntlProvider locale={i18n.locale} messages={i18n.translations}>
      <Item item={model} />
    </IntlProvider>
  ));

storiesOf('Items', module)
  .addDecorator(StoryRouter())
  .addWithJSX('With shipping', () => (
    <IntlProvider locale={i18n.locale} messages={i18n.translations}>
      <Items items={withShipping} />
    </IntlProvider>
  ))
  .addWithJSX('Without shipping', () => (
    <IntlProvider locale={i18n.locale} messages={i18n.translations}>
      <Items items={withoutShipping} />
    </IntlProvider>
  ));

storiesOf('ShippingIcon', module)
  .addWithJSX('Default', () => (<ShippingIcon />));
