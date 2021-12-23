import React,{useState,setState} from "react";
import ItemList from './ItemList';
import { Grid } from '@material-ui/core';
import list from '../data';

export default function ItemListContainer(props){

    const [state, setState] = useState([])
    // setTimeout(() => {
    //         setState(items)
    //         //resolve(true)
    //       }, 2000)
    
    const arrAux = new Promise((resolve, reject) => {
      setTimeout(() => {
        setState(list)
        resolve(true)
      }, 2000)
  }) 

    return(<>
    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
    <Grid item xs={10} sm={10} md={10}>
    <div>{props.greeting}</div>
    {/* <ItemCount stock={5} initial={1} onAdd={'se agregaron los items'} ></ItemCount> */}
    <Grid container spacing={3}>
    {<ItemList items={state}></ItemList>}
    </Grid>
    </Grid>
    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
    </>)
}