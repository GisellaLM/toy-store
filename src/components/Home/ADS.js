import React from 'react';
import { Grid, Paper, Button, Slide } from '@material-ui/core';
import tren from '../../assets/images/banner_tren.png'
import Carousel from 'react-material-ui-carousel'


function Example(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            class: "ads-hello"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            class: "ads-train"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            class: "ads-about"
        }
    ]

    return (
        <Carousel autoPlay={false} animation={"slide"} duration={2000}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button> */}
            <div className={props.item.class} ></div>
        </Paper>
    )
}


export default function ADS() {
    return (<>
        <Grid container>

            <Grid item xs={12} sm={12} md={12}>

                <Example></Example>
                {/* <Grid container>
                    <Grid item xs={12} sm={12} md={6} xl={6}>
                        <div className="ads-hello" ></div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} xl={6}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12}>
                                <div className="ads-train"></div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <div className="ads-about"></div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <div className="ads-about"></div>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid> */}

            </Grid>
        </Grid>

    </>)
}
