import jwtDecode from 'jwt-decode';
import axiosServices from '../api/axiosServices';
import asyncStorage from '../api/asyncStorage';
import AUTHENTICATION_TYPE from './constType';

const prefix = 'auth/';

export const accountLogin = data => dispatch => {
  dispatch({
    type: AUTHENTICATION_TYPE.LOGIN_REQUEST
  });
  return axiosServices
    .post(`${prefix}signin`, data)
    .then(res => {
      const { data } = res;
      asyncStorage.setToken(data);
      dispatch({
        type: AUTHENTICATION_TYPE.LOGIN_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      const error = err.response?.data;
      dispatch({
        type: AUTHENTICATION_TYPE.LOGIN_FAILURE,
        payload: {
          error
        }
      });
      return { error };
    });
};

export const accountLogout = () => dispatch => {
  asyncStorage.clearToken();
  dispatch({
    type: AUTHENTICATION_TYPE.LOGOUT_REQUEST
  });
};

export const refreshError = () => dispatch => {
  dispatch({
    type: AUTHENTICATION_TYPE.REFRESH_REQUEST
  });
};

export const isTokenExpired = () => async dispatch => {
  try {
    const token = await asyncStorage.getAccessToken();
    const todayTime = Math.round((new Date().getTime() + 1) / 1000);
    if (token) {
      const isExpired = jwtDecode(token)?.exp - todayTime;
      if (isExpired > 0) {
        dispatch({
          type: AUTHENTICATION_TYPE.IS_LOGIN_REQUEST,
          payload: { accessToken: token }
        });
      }
    }
  } catch (error) {
    console.log('error authen action', error);
  }
};
