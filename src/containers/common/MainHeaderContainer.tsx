import React from "react";
import { connect, useDispatch } from "react-redux";
import MainHeader from "../../components/common/MainHeader";
import { getAuthorized } from "../../modules/selector";
import { setAccessToken, setMyInfo } from "../../modules/auth";
import client from "../../lib/client";
import Cookies from "js-cookie";

const MainHeaderContainer = ({ isAuthorized, myInfo }:any) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    delete client.defaults.headers.common.Authorization;
    Cookies.remove("accessToken");

    dispatch(setAccessToken(""));
    dispatch(setMyInfo(null));
    window.location.href="/loginPage";

  };

  return (
    <MainHeader
      myInfo={myInfo}
      isAuthorized={isAuthorized}
      onLogout={onLogout}
      
    />
  );
};

export default connect((state:any) => {
  return {
    isAuthorized: getAuthorized(state),
    myInfo: state.auth.myInfo,
  };
})(MainHeaderContainer);
