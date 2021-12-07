import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from '@material-ui/core/IconButton';


export default function CartWidget(){
    
    return(<>
    <IconButton color="default" aria-label="cart">
    <ShoppingCartIcon/>
    </IconButton>
    </>)
}