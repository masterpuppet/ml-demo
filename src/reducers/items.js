import { combineReducers } from 'redux';
import {
  REQUEST_SEARCH_ITEMS,
  REQUEST_SEARCH_ITEMS_ERROR,
  RECEIVE_SEARCH_ITEMS,
  REQUEST_FETCH_ITEM,
  REQUEST_FETCH_ITEM_ERROR,
  RECEIVE_FETCH_ITEM
} from '../actions';

const item = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_FETCH_ITEM:
      return action.item;
    default:
      return state;
  }
}

const items = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_ITEMS:
      return action.items;
    default:
      return state;
  }
}

const categories = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_FETCH_ITEM:
    case RECEIVE_SEARCH_ITEMS:
      return action.categories;
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_ITEMS:
    case REQUEST_FETCH_ITEM:
      return true;
    case REQUEST_SEARCH_ITEMS_ERROR:
    case RECEIVE_SEARCH_ITEMS:
    case REQUEST_FETCH_ITEM_ERROR:
    case RECEIVE_FETCH_ITEM:
        return false;
    default:
      return state;
  }
}

const errors = (state = null, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_ITEMS_ERROR:
    case REQUEST_FETCH_ITEM_ERROR:
        return action.err;
    default:
      return state;
  }
}

export const getItems = state => state.items;
export const getItem = state => state.item;
export const getIsFetching = state => state.isFetching;
export const getCategories = state => state.categories;
export const getErrors = state => state.errors;

export default combineReducers({ item, items, categories, isFetching, errors });
