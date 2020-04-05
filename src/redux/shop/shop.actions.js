import { apiCall } from './../../api/api';
import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    await dispatch(fetchCollectionsStart());
    const response = await apiCall('https://api.jsonbin.io/b/5e8977048841e979d0fdf835');
    if (response.success && response.success === false) {
      await dispatch(fetchCollectionsFailure(response.message));
      return;
    }
    await dispatch(fetchCollectionsSuccess(response));
  };
};