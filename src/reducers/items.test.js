import reducer from './items';
import * as actions from '../actions';

describe('items reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      item: null,
      items: [],
      categories: [],
      isFetching: false,
      errors: null
    });
  });
  it('should handle REQUEST_SEARCH_ITEMS', () => {
    expect(reducer(undefined, {
      type: actions.REQUEST_SEARCH_ITEMS
    })).toEqual({
      item: null,
      items: [],
      categories: [],
      isFetching: true,
      errors: null
    });
  });
  it('should handle RECEIVE_SEARCH_ITEMS', () => {
    const items = [{ id: 'MLA682618052' }];
    const categories = ['Taxon I'];
    expect(reducer(undefined, {
      type: actions.RECEIVE_SEARCH_ITEMS,
      items,
      categories
    })).toEqual({
      item: null,
      isFetching: false,
      errors: null,
      items,
      categories
    });
  });
  it('should handle REQUEST_SEARCH_ITEMS_ERROR', () => {
    const err = new Error('An error ocurred');
    expect(reducer(undefined, {
      type: actions.REQUEST_SEARCH_ITEMS_ERROR,
      err
    })).toEqual({
      item: null,
      isFetching: false,
      errors: err,
      items: [],
      categories: []
    });
  });
  it('should handle REQUEST_FETCH_ITEM', () => {
    expect(reducer(undefined, {
      type: actions.REQUEST_FETCH_ITEM
    })).toEqual({
      item: null,
      isFetching: true,
      errors: null,
      items: [],
      categories: []
    });
    it('should handle REQUEST_FETCH_ITEM', () => {
      const item = { id: 'MLA682618052' };
      const categories = ['Taxon I'];
      expect(reducer(undefined, {
        type: actions.RECEIVE_FETCH_ITEM
      })).toEqual({
        isFetching: false,
        errors: null,
        items: [],
        item,
        categories
      });
    });
    it('should handle REQUEST_SEARCH_ITEMS_ERROR', () => {
      const err = new Error('An error ocurred');
      expect(reducer(undefined, {
        type: actions.REQUEST_SEARCH_ITEMS_ERROR,
        err
      })).toEqual({
        isFetching: false,
        errors: err,
        items: [],
        item: null,
        categories: []
      });
    });
  });
})
