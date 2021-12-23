import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from "../../assets/images/logo.png";
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    logo:{
        marginLeft: theme.spacing(5),
        padding:"10px"
         },
  logoImg:{
    height: "63px",
  },
  button:{
    marginRight: theme.spacing(2),
    fontSize: 15,

    '&:hover':{
      color:'#d59d76'
    }
  },
  boxLinks:{
    flexGrow: 1,
  },
  link:{
    textDecoration:'none'
  }
}));

const menuTabs = [{

  keyTab: 1,
  nameTab: 'CATEGORIES',
  component:'ItemListContainer',
  linkTo:'/categories'
},
{
  keyTab: 2,
  nameTab: 'SHOP LOCATION',
  component:'ItemListContainer',
  linkTo:'/shop-location'
}, {
  keyTab: 3,
  nameTab: 'CONTACT US!',
  linkTo:'/contact-us'
}]

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
        <Link to={'/'}className={classes.logo}>
        <img className={classes.logoImg} src={logo} alt={""}></img>
        </Link>
        <div className={classes.boxLinks}>
           {menuTabs.map((item,index)=>(<Link to={item.linkTo} key={item.keyTab} className={classes.link}><Button key={item.keyTab} className={classes.button}>{item.nameTab}</Button></Link>))} 
        {/* {menuTabs.map((item,index)=>(<Button key={item.keyTab} className={classes.button}>{item.nameTab}</Button>))} */}
       
        </div>
        <div ><CartWidget/></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}



