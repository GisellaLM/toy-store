import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {

    // obtener cuantos items hay en la lista
    const { countItems } = useContext(CartContext)

    return (<>
        <IconButton color="default" aria-label="cart">
            <Badge color="secondary" badgeContent={countItems()}>
                <ShoppingCartIcon />
            </Badge>
        </IconButton>

    </>)
}