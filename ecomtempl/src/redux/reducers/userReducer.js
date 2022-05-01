import {
  PASSWORD_USER_FAIL,
  PASSWORD_USER_SUC,
  LOADING,
  LOGINFAIL,
  LOGINSUC,
  POST_USER_FAIL,
  POST_USER_SUC,
  REGISTERFAIL,
  REGISTERSUC,
  TOKENFAIL,
  TOKENSUC,
  FAV_PROD_USER_FAIL,
  FAV_PROD_USER_SUC,
  PAY_PROD_USER_FAIL,
  PAY_PROD_USER_SUC,
  ALL_USERS_ADMIN_SUC,
  ALL_USERS_ADMIN_FAIL,
  LOADINGADMN,
} from "../actionType";

const initialState = {
  loading: false,
  LOADINGADMN : true,
  errors: {},
  currentUser: {},
  allusers:[],
  myproducts: [],
  products: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
      case LOADINGADMN:
      return { ...state, LOADINGADMN: true };
    case LOGINSUC:
      return { ...state, loading: false, currentUser: payload.user };
    case LOGINFAIL:
      return { ...state, loading: false, errors: payload };
    case TOKENSUC:
      return { ...state, loading: false, currentUser: payload.user };
    case TOKENFAIL:
      return { ...state, loading: false, errors: payload };
    case REGISTERSUC:
      return { ...state, loading: false };
    case REGISTERFAIL:
      return { ...state, loading: false, errors: payload };
    case POST_USER_SUC:
      return { ...state, loading: false, currentUser: payload.user };
    case POST_USER_FAIL:
      return { ...state, loading: false, errors: payload.msg };
    case PASSWORD_USER_SUC:
      return { ...state, loading: false, error: payload.msg };
    case PASSWORD_USER_FAIL:
      return { ...state, loading: false, errors: payload };
    case FAV_PROD_USER_SUC:
      return {
        ...state,
        loading: false,
        error: payload.msg,
        currentUser: payload.user,
        myproducts: payload.user.favProd,
      };
    case FAV_PROD_USER_FAIL:
      return { ...state, loading: false, errors: payload };
    case PAY_PROD_USER_SUC:
      return {
        ...state,
        loading: false,
        error: payload.msg,
        currentUser: payload.user,
        products: payload.user.payProd,
      };
    case PAY_PROD_USER_FAIL:
      return { ...state, loading: false, errors: payload };
    case ALL_USERS_ADMIN_SUC:
        return { ...state, LOADINGADMN: false, allusers: payload };
    case ALL_USERS_ADMIN_FAIL:
        return { ...state, LOADINGADMN: false, errors: payload };
      default:
      return state;
  }
};
