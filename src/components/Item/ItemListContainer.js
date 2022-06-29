import React, { useState, setState } from "react";
import ItemList from './ItemList';
import { Grid } from '@material-ui/core';
import list from '../../data';

export default function ItemListContainer(props) {

  const [state, setState] = useState([])
  // setTimeout(() => {
  //         setState(items)
  //         //resolve(true)
  //       }, 2000)

  const arrAux = new Promise((resolve, reject) => {
    setTimeout(() => {
      setState(list)
      resolve(true)
    }, 1000)
  })

  return (<>

    <Grid item xs={12} sm={12} md={12} lg={12}>
      {/* <div>{props.greeting}</div> */}

      <Grid container spacing={2} alignItems="center" justifyContent="center" >
        {<ItemList items={state}></ItemList>}
      </Grid>
    </Grid>

  </>)
}