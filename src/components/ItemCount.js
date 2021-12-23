import React,{useState,setState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddRounded from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    button:{
      backgroundColor: "##0000000a",
      color:"#d59d76",
      fontWeight:"bold",
      '&:hover':{
        color:'#d59d76'
      }
    }
  }));


export default function ItemCount({stock,initial,onAdd}){

    const classes = useStyles();
    const [count, setCount] = useState(initial)

    const handleIncrement = () => {
        if(count < stock){
            setCount(prevCount => prevCount + 1);
        }
        else{
            alert('Ups! no hay mas stock :(')
        }
        
      };
    
      const handleDecrement = () => {
        if(count>0){
            setCount(prevCount => prevCount - 1);
        }
        
      };
      const addItemToCart = () =>{
           if(count <= stock && count != 0){
              alert(onAdd)
          }
      }

    return(<>
        <Box alignItems="center" justifyContent="center">
          <Box display="inline-flex" borderColor={"#ffff"} marginTop={3} marginBottom={3}>
            <Button size="small" color="primary" className={classes.margin} onClick={handleDecrement}>
            <RemoveRoundedIcon></RemoveRoundedIcon></Button>
            <Box paddingLeft={2} paddingRight={2}>{count}</Box>
            <Button  size="small" color="primary" className={classes.margin} onClick={handleIncrement}>
            <AddRounded></AddRounded>
            </Button>
          </Box>
          <Box>
            <Button onClick={addItemToCart} variant="outlined" className={classes.button}>Add to cart</Button>
          </Box>
        </Box>
    </>)
}