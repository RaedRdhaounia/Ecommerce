import { LOADING_REQUEST,
  REQUEST_USER_FAIL,
  REQUEST_USER_SUC,
  MY_REQUEST_USER_SUC,
  MY_REQUEST_USER_FAIL,
  DELATE_REQUEST_USER_SUC,
  DELATE_REQUEST_USER_FAIL,
  ALL_REQUEST_ADMIN_FAIL,
  ALL_REQUEST_ADMIN_SUC,
  REQUEST_ADMIN_CHECK_SUC,
  REQUEST_ADMIN_CHECK_FAIL,
} from "../actionType";

const initialState = {
  loading: false,
  errors: {},
  requests: [],
  allrequest: [],
};

export const userRequest = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_REQUEST:
      return { ...state, loading: true };
    case REQUEST_USER_SUC:
      return { ...state, loading: false, errors: "succes" };
    case REQUEST_USER_FAIL:
      return { ...state, loading: false, errors: payload.message  };
    case MY_REQUEST_USER_SUC:
      return { ...state, loading: false, requests: payload, errors: "succes" };
    case MY_REQUEST_USER_FAIL:
      return { ...state, loading: false, errors: payload.message  };
      case DELATE_REQUEST_USER_SUC:
      return { ...state, loading: false, errors: "succes", requests :state.requests.filter(r=>r._id !=payload) };
    case DELATE_REQUEST_USER_FAIL:
      return { ...state, loading: false, errors: payload.message };
    case ALL_REQUEST_ADMIN_SUC:
      return { ...state, loading: false, errors: "succes", allrequest: payload };
    case ALL_REQUEST_ADMIN_FAIL:
      return { ...state, loading: false, errors: payload.message };
      case REQUEST_ADMIN_CHECK_SUC:
      return { ...state, loading: false, errors: "succes", allrequest: state.requests.filter(r=>r._id !=payload) };
    case REQUEST_ADMIN_CHECK_FAIL:
      return { ...state, loading: false, errors: payload.message  };
    default:
      return state;
  }
};
