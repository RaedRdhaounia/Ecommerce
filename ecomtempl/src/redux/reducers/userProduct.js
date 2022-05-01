import { GET_MY_PRODUCT_FAIL, GET_MY_PRODUCT_SUC, GET_PRODUCT_FAIL, GET_PRODUCT_SUC, LOADING_PRODUCT, POST_USER_FAIL, POST_USER_SUC } from "../actionType";

const  initialState = {
    loading: true,
    errors: null,
    myproducts: [],
    products :[]
  };

  export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_PRODUCT:
        return { ...state, loading: true };
              case GET_PRODUCT_SUC:
              return { ...state, loading: false, products : payload }
          case GET_PRODUCT_FAIL:
              return { ...state, loading: false, errors: payload }
              case GET_MY_PRODUCT_SUC:
              return { ...state, loading: false, myproducts : payload }
          case GET_MY_PRODUCT_FAIL:
              return { ...state, loading: false, errors: payload }
        default:
        return state;
    }
  };