import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import list from '../data';


export default function ItemDetailContainer(){

    const productId = useParams();

    const [item, setItem] = useState([])

    useEffect(() => {
        const promise = getItems()
        promise.then((json) => {
            setItem(json);
        })
    }, [])

    const getItems = () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    list.filter(function (element) { return element.id == productId.id})
                )
            }, 2000);
        })
        return promise;
    }
    return(<>
        
        <ItemDetail item={item[0]}></ItemDetail>
    </>)
}