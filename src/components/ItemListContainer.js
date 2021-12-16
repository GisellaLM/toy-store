import React from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { Grid } from '@material-ui/core';

export default function ItemListContainer(props){
    return(<>
    <div>{props.greeting}</div>
    <ItemCount stock={5} initial={1} onAdd={'se agregaron los items'} ></ItemCount>
    <Grid container>
    {<ItemList items={props.items}></ItemList>}
    </Grid>
    
    </>)
}