import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock'
import * as actions from './index';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  afterEach(() => {
    nock.cleanAll();
  })
  it('should create RECEIVE_FETCH_ITEM when fetching an item is done', () => {
    const id = 'MLA682618052';
    nock(process.env.API_URL)
      .get(`/api/v1/items/${id}`)
      .reply(200, { item: { id }, categories: ['Taxon I'] })

    const expectedActions = [
      { type: actions.REQUEST_FETCH_ITEM },
      { type: actions.RECEIVE_FETCH_ITEM, item: { id }, categories: ['Taxon I'] }
    ]
    const store = mockStore()

    return store.dispatch(actions.fetchItem(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
  it('should create REQUEST_FETCH_ITEM_ERROR when fetching throws an Error', () => {
    const id = 'MLA682618052';
    nock(process.env.API_URL)
      .get(`/api/v1/items/${id}`)
      .reply(400)

    const expectedActions = [
      { type: actions.REQUEST_FETCH_ITEM },
      { type: actions.REQUEST_FETCH_ITEM_ERROR, err: new Error('Bad response from server') }
    ]
    const store = mockStore()

    return store.dispatch(actions.fetchItem(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
  it('should create REQUEST_SEARCH_ITEMS when fetching items is done', () => {
    const id = 'MLA682618052';
    nock(process.env.API_URL)
      .get(`/api/v1/items?search=autos`)
      .reply(200, { items: [{ id }], categories: ['Taxon I'] })

    const expectedActions = [
      { type: actions.REQUEST_SEARCH_ITEMS },
      { type: actions.RECEIVE_SEARCH_ITEMS, items: [{ id }], categories: ['Taxon I'] }
    ]
    const store = mockStore()

    return store.dispatch(actions.searchItems('?search=autos')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
  it('should create REQUEST_SEARCH_ITEMS_ERROR when fetching throws an Error', () => {
    const id = 'MLA682618052';
    nock(process.env.API_URL)
      .get(`/api/v1/items?search=autos`)
      .reply(400)

    const expectedActions = [
      { type: actions.REQUEST_SEARCH_ITEMS },
      { type: actions.REQUEST_SEARCH_ITEMS_ERROR, err: new Error('Bad response from server') }
    ]
    const store = mockStore()

    return store.dispatch(actions.searchItems('?search=autos')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
})
