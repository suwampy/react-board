import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import BoardList from '../pages/board/list';
import BoardRegForm from '../pages/board/regForm';
import BoardDetail from '../pages/board/detail';
import Login from '../pages/home/login';
import LoginPage from '../pages/auth/SignInPage';
import Cookies from "js-cookie";

const savedToken = Cookies.get("accessToken");

if(savedToken==null){
  console.log('token null');
}

if(savedToken!=null){
  console.log('token not null');
}

// 권한이 필요한곳들
const AuthedRoute = ({ component}:any) => {
  const isAuthed = savedToken==null;
  if(isAuthed){
    return {component};
  }else{
    return "LoginPage";
  }
};

// 권한이 필요없는곳들
const UnAuthedRoute = ({ component}:any) => {
  const isAuthed = savedToken==null;
  if(!isAuthed){
    return {component};
  }else{
    return {BoardList};
  }
};




const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/loginPage" exact component={LoginPage} />


      <Route path="/board/list" component={BoardList} />
      <Route path="/board/regForm" component={BoardRegForm} />
      <Route path="/board/detail" component={BoardDetail} />
      {/* <Redirect path="*" to="/" /> */}
    </Switch>
  </BrowserRouter>
)

export default Root;