import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import list from '../../data';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {

    // const db = getFirestore();
    // const itemsRef = doc(db, "items", "0Qjw9oaoXljNH5hAbyaa")

    // getDoc(itemsRef).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         console.log(snapshot.data())
    //         //setProduct({id:snapshot.id,...snapshot.data()})
    //     }
    // })

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
                    list.filter(function (element) { return element.id == productId.id })
                )
            }, 2000);
        })
        return promise;
    }



    return (<>

        <ItemDetail item={item[0]}></ItemDetail>
    </>)
}