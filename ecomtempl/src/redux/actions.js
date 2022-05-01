import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUC,
  LOADING,
  LOADING_PRODUCT,
  LOGINFAIL,
  LOGINSUC,
  REGISTERFAIL,
  REGISTERSUC,
  TOKENFAIL,
  TOKENSUC,
  POST_USER_SUC,
  POST_USER_FAIL,
  PASSWORD_USER_FAIL,
  PASSWORD_USER_SUC,
  FAV_PROD_USER_SUC,
  FAV_PROD_USER_FAIL,
  PAY_PROD_USER_SUC,
  PAY_PROD_USER_FAIL,
  REQUEST_USER_FAIL,
  REQUEST_USER_SUC,
  LOADING_REQUEST,
  MY_REQUEST_USER_SUC,
  MY_REQUEST_USER_FAIL,
  DELATE_REQUEST_USER_FAIL,
  DELATE_REQUEST_USER_SUC,
  ALL_REQUEST_ADMIN_SUC,
  ALL_REQUEST_ADMIN_FAIL,
  REQUEST_ADMIN_CHECK_SUC,
  REQUEST_ADMIN_CHECK_FAIL,
  ALL_USERS_ADMIN_SUC,
  ALL_USERS_ADMIN_FAIL,
  LOADINGADMN,
  GET_MY_PRODUCT_SUC,
  GET_MY_PRODUCT_FAIL,
} from "./actionType";
import axios from "axios";

// dispatch user 
  // dispatch register
  export const registerUser = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const response = await axios.post(
      "http://localhost:5000/user/register",
      newUser
    );
    dispatch({ type: REGISTERSUC, payload: response.data });
    alert("welcome to our site ");
    navigate("/login");
  } catch (error) {
    console.dir(error);
    dispatch({ type: REGISTERFAIL, payload: error });
    if (error.response.data.msg) {
      alert(error.response.data.msg);
    } else {
      error.response.data.errors.map((el) => alert(el.msg));
    }
  }
};
  // disptch log in
  export const logIn = ({ email, password }, navigate) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      console.dir(response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.user.id);
      dispatch({ type: LOGINSUC, payload: response.data });
      await navigate("/home");
      return alert("welcome");
    } catch (error) {
      console.dir(error);
      dispatch({ type: LOGINFAIL, payload: error });
      alert("check information");
    }
  };
  // dispatch get user details
  export const getCurrentUser = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.get(
      "http://localhost:5000/user/current",
      opts
    );
    dispatch({ type: TOKENSUC, payload: response.data });
  } catch (error) {
    console.dir(error);
    dispatch({ type: TOKENFAIL, payload: error });
    if (error.response.data.msg) {
      alert(error.response.data.msg);
    } else {
      error.response.data.errors.map((el) => alert(el.msg));
    }
  }
};
  // dispatch update user details
  export const updatUser = (newuser) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const response = await axios.post(
      `http://localhost:5000/user/update/${newuser._id}`,
      newuser
    );
    dispatch({ type: POST_USER_SUC, payload: response.data });
    console.log(response);
    return alert(response.data.msg);
  } catch (error) {
    dispatch({ type: POST_USER_FAIL, payload: error });
    return alert(error);
  }
};
  // dispatch update user password
  export const changepassword = (passwordCH, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const response = await axios.post(
      `http://localhost:5000/user/password/${passwordCH._id}`,
      passwordCH
    );
    dispatch({ type: PASSWORD_USER_SUC, payload: response.data });
    alert(response.data.msg);
    navigate("/dashboard");
  } catch (error) {
    dispatch({ type: PASSWORD_USER_FAIL, payload: error });
    return alert(`error: ${error}`);
  }
};
  // dispatch add / remove favourite product
  export const favourite = (userid, productid) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const respose = await axios.post(
      `http://localhost:5000/user/favproduct/${productid}`,
      { id: userid }
    );
    dispatch({ type: FAV_PROD_USER_SUC, payload: respose.data });
    return alert(respose.data.msg);
  } catch (error) {
    dispatch({ type: FAV_PROD_USER_FAIL, payload: error });
    return alert(error);
  }
};
  // dispatch add /remove payment product
  export const payment = (userid, productid) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const respose = await axios.post(
      `http://localhost:5000/user/payproduct/${productid}`,
      { id: userid }
    );
    dispatch({ type: PAY_PROD_USER_SUC, payload: respose.data });
    return alert(respose.data.msg);
  } catch (error) {
    dispatch({ type: PAY_PROD_USER_FAIL, payload: error });
    return alert(error);
  }
};


// dispatch user prduct
  // dispatch get all prodcts
  export const getProduct = () => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCT });
  try {
    const response = await axios.get("http://localhost:5000/product/all");
    dispatch({ type: GET_PRODUCT_SUC, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
  }
};
// dispatch get all prodcts
export const myProducts = () => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCT });
  try {
    const id = localStorage.getItem("id")
    console.log(id)
    const response = await axios.get(`http://localhost:5000/product/myproduct/${id}`);
    dispatch({ type: GET_MY_PRODUCT_SUC, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_MY_PRODUCT_FAIL, payload: error });
  }
};


// dispatch request user
  // dispatch post a request
  export const sendRequest =({userid, username, email, body, name, password },navigate) =>async (dispatch) => {
    dispatch({ type: LOADING_REQUEST });
    try {
      const respose = await axios.post(
        `http://localhost:5000/request/contact/${userid}`,
        { username, email, body, name, password }
      );
      dispatch({ type: REQUEST_USER_SUC, payload: respose.data });
      navigate("#")
    } catch (error) {
      dispatch({ type: REQUEST_USER_FAIL, payload: error });
    }
  };
  // dispatch get all prodcts
  export const getMyRequest = (id) => async (dispatch) => {
    dispatch({ type: LOADING_REQUEST });
    try {
      const response = await axios.get(`http://localhost:5000/request/myrequest/${id}`);
      console.log(response)
      dispatch({ type: MY_REQUEST_USER_SUC, payload: response.data });
  
    } catch (error) {
      dispatch({ type: MY_REQUEST_USER_FAIL, payload: error });
    }
  };
  // dispatch delate my request
  export const delateMyRequest =(reqId)=> async (dispatch) =>{
    dispatch({ type: LOADING_REQUEST });
  try {
    console.log(reqId)
    const response = await axios.delete(`http://localhost:5000/request/myrequest/${reqId}`);
     dispatch({ type: DELATE_REQUEST_USER_SUC, payload: reqId });
    alert("request delated")
  } catch (error) {
    dispatch({ type: DELATE_REQUEST_USER_FAIL, payload: error });
   
  }
  }


// dispatch admin
// dispatch get all users details
export const getAllUsers = (id) => async (dispatch) => {
  dispatch({ type: LOADINGADMN });
  try {
    const response = await axios.get(
      `http://localhost:5000/user/admin/current/${id}`
    );
    dispatch({ type: ALL_USERS_ADMIN_SUC, payload: response.data });
  } catch (error) {
    console.dir(error);
    dispatch({ type: ALL_USERS_ADMIN_FAIL, payload: error });
    if (error.response.data.msg) {
      alert(error.response.data.msg);
    } else {
      error.response.data.errors.map((el) => alert(el.msg));
    }
  }
};
  // dispatch get all requests
  export const getAllRequest = (Adminid) => async (dispatch) => {
  dispatch({ type: LOADING_REQUEST });
  try {
    const response = await axios.get(`http://localhost:5000/request//contact/${Adminid}`);
    console.log(response)
    dispatch({ type: ALL_REQUEST_ADMIN_SUC, payload: response.data });

  } catch (error) {
    dispatch({ type: ALL_REQUEST_ADMIN_FAIL, payload: error });
  }
};
  // dispatch check a request
export const checkRequest = (Adminid, reqId) => async (dispatch) => {
  dispatch({ type: LOADING_REQUEST });
  try {
    console.log(reqId)
    const response = await axios.post(`http://localhost:5000/request/admin/request/${Adminid}`,{reqId: reqId});
    console.log(response)
    dispatch({ type: REQUEST_ADMIN_CHECK_SUC, payload: reqId });

  } catch (error) {
    dispatch({ type: REQUEST_ADMIN_CHECK_FAIL, payload: error });
  }
};





