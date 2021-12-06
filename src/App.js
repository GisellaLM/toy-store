import './App.css';
import NavBar from './components/NavBar';
import { Grid } from '@material-ui/core';


function App() {
  return (
   
    <div className="App">
      <Grid container>
        <Grid item sm={12} md={12}><NavBar></NavBar> </Grid>
        <Grid item> </Grid>
      </Grid>
    </div>
   
  );
}

export default App;
