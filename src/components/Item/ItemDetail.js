import React, { useContext, useState } from "react";
import { Grid } from '@material-ui/core';
import ItemCount from './ItemCount';
import Loader from "react-loader-spinner";
import { CartContext } from "../../context/CartContext";
import Button from '@material-ui/core/Button';


export default function ItemDetail({ item }) {

    const { addItem } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1);

    const addItemToCart = () => {
        addItem({ item, quantity });
    }

    const onChange = (quantity) => {
        setQuantity(quantity);
    }

    if (item) {
        return (<>
            <Grid item xs={10} sm={10} md={10} lg={10}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={item.pictureUrl} style={{ width: "100%" }}></img>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>

                        <div style={{ padding: "2em" }}>
                            <h1>{item.title}</h1>
                            <p style={{ textAlign: "justify" }}>{item.description}</p>
                        </div>
                        <div>
                            <ItemCount max={item.stock} initial={quantity} onChange={onChange} />
                        </div>
                        <Button onClick={addItemToCart} variant="outlined" className={"btn-confirm"}>Add to cart</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>)
    }
    else {
        return (<>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Loader type="TailSpin" color="#d59d76" height={100} width={100} />
                </Grid>
            </Grid>
        </>)
    }
}