import { useEffect } from "react";
import { useState } from "react"

export const useFecth = (url) => {
    const [dataCoffe, setDataCoffe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const fetchData = async () => {
        try {
            const resp = await fetch(url)
            const data = await resp.json();
            setDataCoffe(data)
        } catch (error) {
            throw new Error("Error", error);
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        dataCoffe,
        loading,
        error
    }
}