import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import * as api from "../lib/api";
import client from "../lib/client";
import Cookies from "js-cookie";

const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN";
const LOGIN = "auth/LOGIN";

const SET_MY_INFO = "auth/SET_MY_INFO";
const CHECK_MY_INFO = "auth/CHECK_MY_INFO";

export const setAccessToken = createAction(SET_ACCESS_TOKEN, (accessToken :any) => accessToken);
export const login = createAction(LOGIN, ({ userId , password } :any) => ({ userId, password }));

export const setMyInfo = createAction(SET_MY_INFO, (myInfo:any) => myInfo);
export const checkMyInfo = createAction(CHECK_MY_INFO);


interface login {
  payload : {
    password : string;
    userId : string
  };
  type : string;
}

interface member {
  id : string,
  name : string,
  email : string,
  password : string,
  type : string,
  regDate : string,
  mNo : number,
  authList : []
}

const initialState = {
  accessToken: "",
  
};


function* loginSaga(action : any) {
    try {

      console.log(action);
      const { userId, password } = action.payload;  
      const response = yield call(api.signIn, userId, password);
  
      console.log(response);

      const { authorization } = response.headers;
      const accessToken = authorization.substring(7);

      yield put(setAccessToken(accessToken));
  
      client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      //Cookies.set("accessToken", accessToken, { expires: 1 });
      Cookies.set("accessToken", accessToken, { expires: 1 });
      console.log("accessToken: " + accessToken);


    } catch (e) {
      alert('로그인에 실패하였습니다.');
      console.log(e);
    }
  }

  function* checkMyInfoSaga() {
    try {
      const response = yield call(api.getMyInfo);
      
      yield put(setMyInfo(response.data));
    } catch (e) {
      console.log(e);
    }
  }
  

  export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(CHECK_MY_INFO, checkMyInfoSaga);
  }



  const auth = handleActions(
    {
      [SET_ACCESS_TOKEN]: (state, action) => ({
        ...state,
        accessToken: String(action.payload),
      }),
      [SET_MY_INFO]: (state, action) => ({
        ...state,
        myInfo: action.payload,
      }),
    },
    initialState
  );
  
  export default auth;