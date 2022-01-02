import fbStorageService from 'services/firebase.storage.service';
import * as actionTypes from '../actionTypes';

export const fetchBusinessesAction = () => async dispatch => {
  dispatch({
    type: actionTypes.LOAD_BUSINESSES_REQUEST,
  });

  try {
    const businesses = await fbStorageService.getAllApprovedBusinesses();

    dispatch({
      type: actionTypes.LOAD_BUSINESSES_SUCCESS,
      payload: {
        businesses,
      },
    });
  } catch (e) {
    dispatch({
      type: actionTypes.LOAD_BUSINESSES_FAILURE,
    });
  }
};

export const registerBusinessAction = () => async dispatch => {
  dispatch({
    type: actionTypes.REGISTER_BUSINESS_REQUEST,
  });

  try {
    const business = await fbStorageService.registerBusiness();

    // TODO: Review this dispatch
    dispatch({
      type: actionTypes.REGISTER_BUSINESS_SUCCESS,
      payload: {
        business,
      },
    });
  } catch (e) {
    dispatch({
      type: actionTypes.REGISTER_BUSINESS_FAILURE,
    });
  }
};

export const initializeAction = () => async dispatch => {
  await dispatch(fetchBusinessesAction());
};
