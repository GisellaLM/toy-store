import './App.css';
import NavBar from './components/Navbar/NavBar';
import { Grid } from '@material-ui/core';
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} sm={12} md={12}><NavBar/></Grid>
        <Grid item xs={12} sm={12} md={12}><ItemListContainer greeting={"soy un mensaje del componente itemListContainer"}/></Grid>
              </Grid>
    </div>
   
  );
}

export default App;
