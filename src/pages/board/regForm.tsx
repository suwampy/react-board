import React, { useState, useCallback }  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import { styled } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { DropzoneArea } from 'material-ui-dropzone';
import { WithContext as ReactTags } from 'react-tag-input';
import 'react-dropzone-uploader/dist/styles.css'
import ChipInput from 'material-ui-chip-input'
import Modal from '@material-ui/core/Modal';
import MainHeaderContainer from "../../containers/common/MainHeaderContainer";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



const barStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);
const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  

interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
}

// 트리
const data: RenderTree = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};












const useTreeStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
    textAlign: 'left',
  },
});


interface ButtonProps {
  color: 'red' | 'blue';
}


const ButtonStyles = makeStyles({
  root: {
    background: (props: ButtonProps) =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props: ButtonProps) =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
});

function MyButton(props: ButtonProps & Omit<MuiButtonProps, keyof ButtonProps>) {
  const { color, ...other } = props;
  const buttonStyle = ButtonStyles(props);
  return <Button className={buttonStyle.root} {...other} />;
}



const renderTree = (nodes: RenderTree) => (
  <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
    {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
  </TreeItem>
);

const gStyle ={
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  }

  const useSearchStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  
  const delimiters = [KeyCodes.comma, KeyCodes.enter];





  
export default function Album() {
    const classes = useStyles();
    const searchStyle = useSearchStyles();
    const treeStyle = useTreeStyles();

    const [title, setTitle] = useState('');
    const [category, setCategory] =useState('');
    const [file, setFile] = useState('');
    const [tag, setTag] = useState([]);

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };
  
    const modalBody = (
      <div>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <Album />
      </div>
    );
  

    const fileOnChange =useCallback((e) => {
      setOpen(true);
      setFile(e);
    }, []);

    const tagOnChange = useCallback((e)=>{
      setTag(e);
    },[]);

    const titleOnChange = useCallback((e)=>{
      setTitle(e.target.value);
    },[]);

    const fileUpload=()=>{
      console.log(title);
      console.log(category);
      console.log(file);
      console.log(tag);

      
    }

  const bStyle = barStyles();
  return (
    
    <React.Fragment>
      <CssBaseline />


      <MainHeaderContainer/>

      <Toolbar style={{display:"inline"}}id="back-to-top-anchor" />
      <main>
        <div className={classes.cardGrid}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              <b>신규 미디어 등록</b>
            </Typography>
          </Container>

          <Container maxWidth="md">
            <b>제목</b>
            <Paper className={searchStyle.paper}>
              <Input onChange={titleOnChange}/>
            </Paper>
          </Container>
        <br></br>
        <br></br>
          <Container maxWidth="md">
            <b>카테고리 선택</b>
            <Paper className={searchStyle.paper}>
                <TreeView
                          className={treeStyle.root}
                          defaultCollapseIcon={<ExpandMoreIcon />}
                          defaultExpandIcon={<ChevronRightIcon />}
                          
                        >
                          {renderTree(data)}
                </TreeView>
            </Paper>
          </Container>
        <br></br>
        <br></br>
        <Container maxWidth="md">
            <b>해시태그 입력</b>
            <Paper className={searchStyle.paper}>
              <ChipInput
              defaultValue={['foo', 'bar']}
              placeholder='태그를 입력하고 엔터'
              onChange={tagOnChange}
              />
            </Paper>
          </Container>
        <br></br>
        <br></br>
        <Container maxWidth="md">
            <b>파일 선택</b>
            <DropzoneArea
            dropzoneText={"파일을 드래그하거나 클릭해서 업로드 해주세요"}
            maxFileSize={100000000000000000000000000000}
            onChange={fileOnChange}
            showFileNames={true}
            />
        </Container>
        <br></br>
        <br></br>
        <Container maxWidth="md">
            <Box textAlign='center'>
                <MyButton color="blue" onClick={fileUpload}>등록하기</MyButton>
                <MyButton color="red">취소</MyButton>
            </Box>
        </Container>
        </div>

      </main>

      
    </React.Fragment>
  );
}