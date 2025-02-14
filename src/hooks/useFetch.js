import { useEffect } from "react";
import { useState } from "react"

export const useFecth = (url, dispatch) => {
    const fetchData = async () => {
        try {
            const resp = await fetch(url)
            const data = await resp.json();
            dispatch({
                type: 'set_products',
                payload: data
            })
        } catch (error) {
            throw new Error("Error", error);
        }

    }

    useEffect(() => {
        fetchData();
    }, [dispatch])


}