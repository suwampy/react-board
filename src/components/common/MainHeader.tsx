import React from "react";
import { Link } from "react-router-dom";
import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';

import {Theme, createStyles, makeStyles } from '@material-ui/core/styles';




//{!isAuthorized && !myInfo && <Link to="/signin">로그인</Link>}
function MainHeader({ myInfo, isAuthorized, onLogout }:any) {
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    }
  }));
  
  const classes = useStyles();
  
  const gStyle ={
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  }

    return (
      <div>
        {isAuthorized && myInfo && (
          <AppBar position="fixed" style={gStyle}>
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              <Link to="/board/list">Media</Link>
            </Typography>
                    <div>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;{myInfo.name}님 환영합니다.</span>
                      <Button color="inherit" onClick={onLogout}>LOGOUT</Button>
                    </div>
          </Toolbar>
          </AppBar>

        )}
      </div>
    );
  }

export default MainHeader;
