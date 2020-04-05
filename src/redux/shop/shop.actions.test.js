import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SHOP_DATA from './shop.data';

import ShopActionTypes from './shop.types';
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

const mockStore = configureMockStore([thunk]);

const mockFetchSuccess = jest.fn().mockReturnValue(Promise.resolve({
  json: () => Promise.resolve(SHOP_DATA)
}));

const mockFetchFail = jest.fn().mockReturnValue(Promise.resolve({
  json: () => Promise.resolve({
    success: false,
    message: 'Some error occured'
  })
}))

const testSuccessAction = () => {
  return async dispatch => {
    const response = await mockFetchSuccess();
    const data = await response.json();
    dispatch(fetchCollectionsSuccess(data));
  }
};

const testFailureAction = () => {
  return async dispatch => {
    const response = await mockFetchFail();
    const data = await response.json();
    dispatch(fetchCollectionsFailure(data.message));
  }
};

describe('fetchCollectionsStart action', () => {
  it('should create the fetchCollectionsStart action', () => {
    expect(fetchCollectionsStart().type).toEqual(
      ShopActionTypes.FETCH_COLLECTIONS_START
    );
  });
});

describe('fetchCollectionsSuccess action', () => {
  it('should create the fetchCollectionsSuccess action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1
      }
    };

    const action = fetchCollectionsSuccess(mockCollectionsMap);

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('fetchCollectionsFailure action', () => {
  it('should create the fetchCollectionsFailure action', () => {
    const action = fetchCollectionsFailure('errored');

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual('errored');
  });
});

describe('fetchCollectionsStartAsync action', () => {
  it('should create the fetchCollectionsStartAsync action', () => {
    const store = mockStore();
    store.dispatch(fetchCollectionsStart());
    const action = store.getActions();
    const expectedAction = {
      type: ShopActionTypes.FETCH_COLLECTIONS_START
    };

    expect(action[0]).toEqual(expectedAction);
  });

  it('should call fetchCollectionsSuccess on successful data fetch', async () => {
    const store = mockStore();
    const expectedAction = {
      type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
      payload: SHOP_DATA
    };
    await store.dispatch(testSuccessAction())
    const action = store.getActions();
    expect.assertions(1);
    return expect(action[0]).toEqual(expectedAction)
  })

  it('should call fetchCollectionsFailure on error in data fetch', async () => {
    const store = mockStore();
    const expectedAction = {
      type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
      payload: 'Some error occured'
    };
    await store.dispatch(testFailureAction());
    const action = store.getActions();
    expect.assertions(1);
    return expect(action[0]).toEqual(expectedAction)
  });
});