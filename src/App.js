import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import { Grid } from '@material-ui/core';
import ItemListContainer from './components/Item/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Categories from './components/Categories';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import About from './components/About';
import Stores from './components/Stores';
function App() {


  return (

    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Grid container>

            <Grid item xs={12} sm={12} md={12}>
              <NavBar />
            </Grid>

            <Grid container>
              <Grid item xs={1} sm={1} md={1} />
              <Grid item xs={10} sm={10} md={10}>
                <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route exact path="/product/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                  <Route exact path="/shop" element={<ItemListContainer greeting=""></ItemListContainer>}></Route>
                  <Route exact path="/stores" element={<Stores greeting=""></Stores>}></Route>
                  <Route exact path="/about" element={<About />}></Route>
                  <Route exact path="/categories" element={<Categories></Categories>}></Route>
                  <Route exact path="/shop/product/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                </Routes>

                <Footer />
              </Grid>
              <Grid item xs={1} sm={1} md={1} />
            </Grid>
          </Grid>

        </BrowserRouter>
      </CartProvider>
    </div>

  );
}

export default App;
