import React,{useState,setState} from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import { Grid } from '@material-ui/core';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categories from './components/Categories';


function App() {
return (
  <div className="App">
    <BrowserRouter>
    <Grid container>
      <Grid item xs={12} sm={12} md={12}><NavBar /></Grid>
      {/* <Grid item xs={12} sm={12} md={12}><ItemListContainer greeting={""}/></Grid> */}

      <Routes>
      <Route exact path="/" element={<ItemListContainer greeting=""></ItemListContainer>}></Route>
      <Route exact path="/categories" element={<Categories></Categories>}></Route>
      <Route exact path="/product/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
    </Routes>
    </Grid>
   
    </BrowserRouter>
  </div>

);
}

export default App;
