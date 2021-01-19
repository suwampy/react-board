import React from 'react';
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
import { Link } from "react-router-dom";
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
import MainHeaderContainer from "../../containers/common/MainHeaderContainer";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


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

const barStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const barStyle = barStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={barStyle.root}>
        {children}
      </div>
    </Zoom>
  );
}



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




const useDateStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

export default function Album(props: Props) {
  const classes = useStyles();
  const searchStyle = useSearchStyles();
  const treeStyle = useTreeStyles();
  const dateStyle = useDateStyles();


  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: true,
    checkedD: false,
    checkedE: false,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const searchChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
  ];
  const [age, setAge] = React.useState('');

  const gStyle ={
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  }

  
  const bStyle = barStyles();
  return (
    
    <React.Fragment>
      <CssBaseline />
      <MainHeaderContainer/>

      <Toolbar style={{display:"inline"}}id="back-to-top-anchor" />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              <b>Media</b>
            </Typography>
          </Container>
          <Container maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                  카테고리
                </Grid>
                <Grid item xs={10}>
                  <Paper className={searchStyle.paper}>
                        <TreeView
                          className={treeStyle.root}
                          defaultCollapseIcon={<ExpandMoreIcon />}
                          defaultExpanded={['root']}
                          defaultExpandIcon={<ChevronRightIcon />}
                        >
                          {renderTree(data)}
                        </TreeView>

                  </Paper>
                </Grid>
                <Grid item xs={2}>
                  해시태그
                </Grid>
                <Grid item xs={10}>
                  <Paper className={searchStyle.paper}>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={top100Films}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(option, { selected }) => (
                          <React.Fragment>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              style={{ marginRight: 8 }}
                              checked={selected}
                            />
                            {option.title}
                          </React.Fragment>
                        )}

                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" label="해시태그" placeholder="..." />
                        )}
                    />
                  </Paper>
                </Grid>

                <Grid item xs={2}>
                  날짜
                </Grid>
                <Grid item xs={10}>
                  <Paper className={searchStyle.paper}>

                    <TextField
                      id="date"
                      type="date"
                      className={dateStyle.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                      <TrendingFlatIcon/>
                    <TextField
                        id="date"
                        type="date"
                        className={dateStyle.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                  </Paper>
                </Grid>

                <Grid item xs={2}>
                  키워드
                </Grid>
                <Grid item xs={10}>
                  <Paper className={searchStyle.paper}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        onChange={searchChange}
                     >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                  </Select>
                  
                  
                  <Input  inputProps={{ 'aria-label': 'description' }} />
                  </Paper>
                </Grid>

                <Grid item xs={12}  >
                  <Box textAlign='center'>
                    <MyButton color="red">검색</MyButton>
                    <Link to="/board/regForm"><MyButton color="blue">새 미디어 등록</MyButton></Link>
                  </Box>
                </Grid>
            </Grid>

          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="md">
          총 0건의 미디어가 출력됩니다.
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Slider {...settings}>
                    <div>
                      <img height="200px" width="100%" src="https://imgscience.ytn.co.kr/sciencetv/jpg/vod0082/2018/201801241239156078_h.jpg"/>
                    </div>
                    <div>
                      <img height="200px" width="100%"  src="https://img.hani.co.kr/imgdb/resize/2019/1015/00501921_20191015.JPG"/>
                    </div>
                    <div>
                      <img height="200px" width="100%"  src="https://imgscience.ytn.co.kr/sciencetv/jpg/vod0082/2018/201801241239156078_h.jpg"/>
                    </div>
                  </Slider>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      제목
                    </Typography>
                    <Typography>
                      <b>작성자</b>
                    </Typography>
                    <Typography>
                      작성날짜
                    </Typography>
                    <Typography>
                      #해시태그
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}