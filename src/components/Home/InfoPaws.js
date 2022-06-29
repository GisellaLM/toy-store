import React from "react";
import { Grid } from "@material-ui/core";
import ShopBag from '../../assets/images/shop-bag-icon.png';
import Delivery from '../../assets/images/delivery-icon.png';
import Gift from '../../assets/images/gift-icon.png';

export default function InfoPaws() {

    return (<>
        <div className="infoPaws">
            <Grid container alignItems="center" justifyContent="center" spacing={0} >
                <Grid item md={4}>
                    <div>
                        <img src={ShopBag}></img>
                        <div>NEW PICK UP SERVICE</div>
                        <div>blablabla</div>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div style={{ borderLeft: '2px solid #000000', borderRight: '2px solid #000000' }}>
                        <img src={Delivery}></img>
                        <div>FREE DELIVERY</div>
                        <div>blablabla</div>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div>
                        <img src={Gift}></img>
                        <div>SPECIAL GIFT WRAPS</div>
                        <div>blablabla</div>
                    </div>
                </Grid>
            </Grid>
        </div>
    </>)
}