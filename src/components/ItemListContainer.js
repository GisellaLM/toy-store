import React from "react";
import ItemCount from './ItemCount';

export default function ItemListContainer(props){
    return(<>
    <div>{props.greeting}</div>
    <ItemCount stock={5} initial={1} onAdd={'se agregaron los items'} ></ItemCount>
    </>)
}