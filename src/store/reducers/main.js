import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  isLoading: true,
  businesses: [],
  business: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_BUSINESSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOAD_BUSINESSES_SUCCESS:
      return {
        ...state,
        businesses: action.payload.businesses,
        isLoading: false,
      };
    case actionTypes.LOAD_BUSINESSES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.REGISTER_BUSINESS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REGISTER_BUSINESS_SUCCESS:
      return {
        ...state,
        business: action.payload.business,
        isLoading: false,
      };
    case actionTypes.REGISTER_BUSINESS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
