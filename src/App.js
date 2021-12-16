import React,{useState,setState} from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import { Grid } from '@material-ui/core';
import ItemListContainer from './components/ItemListContainer';

const items = [{ id: 1, title: "Item 1", description: "description item 1", price: "$100", pictureUrl: "picture.png" },
               { id: 2, title: "Item 2", description: "description item 2", price: "$200", pictureUrl: "picture.png" }]

function App() {

  const [state, setState] = useState([])
  // setTimeout(() => {
  //         setState(items)
  //         //resolve(true)
  //       }, 2000)
  
  const arrAux = new Promise((resolve, reject) => {
    setTimeout(() => {
      setState(items)
      resolve(true)
    }, 2000)
})    

return (
  <div className="App">
    <Grid container>
      <Grid item xs={12} sm={12} md={12}><NavBar /></Grid>
      <Grid item xs={12} sm={12} md={12}>
        <ItemListContainer greeting={"soy un mensaje del componente itemListContainer"} items={state}/></Grid>
    </Grid>
  </div>

);
}

export default App;
