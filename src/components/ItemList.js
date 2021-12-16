import React from 'react';
import Item from './Item'

export default function ItemList({items}){

    return(<>
    {(items.length ? (items.map((element,index)=>(<Item key={element.id} item={element} ></Item>))) : 'no hay items')}    
    </>)
}