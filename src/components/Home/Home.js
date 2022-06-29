import React from "react";
import ADS from "./ADS";
import InfoPaws from "./InfoPaws";
import { Grid } from '@material-ui/core';
import ItemListContainer from '../Item/ItemListContainer'
import Item from '../Item/Item'
export default function Home() {
    return (<>
        <ADS></ADS>
        <InfoPaws></InfoPaws>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}><h2>OUR LATEST ARRIVALS</h2>
                <ItemListContainer></ItemListContainer>
            </Grid>
        </Grid>

    </>)
};