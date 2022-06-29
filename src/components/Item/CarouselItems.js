import React from "react";

import { Grid, Paper, Button, Slide } from '@material-ui/core';

import Carousel from 'react-material-ui-carousel';
import Item from '../Item/Item';

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

            <Item></Item>
        </Paper>
    )
}

export default function CarouselItems() {

    return (<>

    </>)
}