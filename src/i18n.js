import { addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import ar from 'react-intl/locale-data/ar';

const i18n = {
  locale: 'es-AR',
  translations: {
    item_description: 'Descripcion del producto',
    item_price: 'Comprar',
    item_sold_quantity: '{count, number} {count, plural, one {vendido} other {vendidos}}',
    item_condition_new: 'Nuevo',
    item_condition_used: 'Usado',
    title: 'Mercado Libre',
    search: 'Buscar',
    search_placeholder: 'Nunca dejes de buscar',
    not_found: '404 Not Found',
    items_not_found: 'No hay publicaciones que coincidan con tu búsqueda.',
    items_not_found_list_item1: 'Revisa la ortografía de la palabra',
    items_not_found_list_item2: 'Utiliza palabras más genéricas o menos palabras.',
    loading: 'Cargando...',
    home: 'Comienza a buscar ahora!'
  }
};

addLocaleData([...en, ...es, ...ar]);

export default i18n;
