import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInForm from "../../pages/home/login";
import { withRouter } from "react-router-dom";
import { checkMyInfo,login } from "../../modules/auth";


const SignInContainer = ({ history } :any) => {
    const dispatch = useDispatch();
    
    const { accessToken, myInfo } = useSelector(({ auth } :any) => ({
      accessToken: auth.accessToken,
      myInfo: auth.myInfo,
    }));
    
    const onSignIn = (userId : string, password : string) => {
      try {
        dispatch(login({ userId, password }));
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      if (accessToken) {
        dispatch(checkMyInfo());
      }
    }, [accessToken, dispatch]);

    useEffect(() => {
      console.log('.');
      if (myInfo) {
        alert("로그인 되었습니다.");
        console.log(myInfo);
        history.push("/board/list");
      }
    }, [myInfo,history]);
    
    return <SignInForm onSignIn={onSignIn} />;
  };
  
  export default withRouter(SignInContainer);
  