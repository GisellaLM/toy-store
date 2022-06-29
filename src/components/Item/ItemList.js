import React from 'react';
import Item from './Item'
import { Grid } from '@material-ui/core';
import Loader from "react-loader-spinner";
export default function ItemList({ items }) {

    return (<>
        {(items.length ?
            (items.map((element, index) => (
                <Item key={element.id} item={element} ></Item>
            )))
            : <Grid item xs={12} sm={12} md={12} lg={12} ><Loader type="TailSpin" color="#d59d76" height={100} width={100} /></Grid>)}
    </>)
}