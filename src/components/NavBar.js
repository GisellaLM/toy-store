import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from "../img/logo.png";

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
  }
}));

const menuTabs = [{
  keyTab: 1,
  nameTab: 'HOME',
},
{
  keyTab: 2,
  nameTab: 'CATEGORIES'
},
{
  keyTab: 3,
  nameTab: 'SHOP LOCATION'
}, {
  keyTab: 4,
  nameTab: 'CONTACT US!'
}]

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
        <div className={classes.logo}>
        <img className={classes.logoImg} src={logo} alt={""}></img>
        </div>
        <div className={classes.boxLinks}>
        {menuTabs.map((item,index)=>(<Button key={item.keyTab}className={classes.button}>{item.nameTab}</Button>))}
        </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}



