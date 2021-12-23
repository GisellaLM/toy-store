import React from "react";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ItemCount from './ItemCount';
import Loader from "react-loader-spinner";
const useStyles = makeStyles((theme) => ({
   picture:{
       width:"100%"
   }
  }));

export default function ItemDetail({item}){

    const classes = useStyles();

    if (item != undefined) {
        return(<>
            <Grid container >
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <img src={item.pictureUrl} className={classes.picture}></img>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div>
                            <Typography variant="h4">{item.title}</Typography>
                            <Typography variant="p">{item.description}</Typography>
                            </div>
                            <div><ItemCount stock={item.stock} initial={1} onAdd={'se agregaron los items'}></ItemCount></div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
            </Grid>
                 {/* { <ItemCount></ItemCount> } */}
           </>)

        
    }
    else{
        return(<>
           <Grid container>
               <Grid item item xs={12} sm={12} md={12} lg={12}>
               <Loader type="TailSpin" color="#d59d76"  height={100} width={100}/>
               </Grid>
           </Grid>
        </>)
    }
}