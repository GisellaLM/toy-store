import React,{useState,setState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddRounded from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0),
    },
    extendedIcon: {
      marginRight: theme.spacing(0),
    },
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
        
        <div>
        <Button size="small" color="primary" className={classes.margin} onClick={handleDecrement}>
        <RemoveRoundedIcon></RemoveRoundedIcon></Button>
        <p>{count}</p>
        <Button  size="small" color="primary" className={classes.margin} onClick={handleIncrement}>
        <AddRounded></AddRounded>
        </Button>
        </div>

        <button onClick={addItemToCart}>Agregar a carrito</button>
    </>)
}