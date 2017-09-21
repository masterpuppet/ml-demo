import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import items, * as itemsReducer from './items';

const rootReducer = combineReducers({
  items,
  router: routerReducer
})

export const getItems = (state) => itemsReducer.getItems(state.items);
export const getItem = (state) => itemsReducer.getItem(state.items);
export const getIsFetching = (state) => itemsReducer.getIsFetching(state.items);
export const getCategories = (state) => itemsReducer.getCategories(state.items);
export const getErrors = (state) => itemsReducer.getErrors(state.items);

export default rootReducer;
