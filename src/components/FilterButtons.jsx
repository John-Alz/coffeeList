import { useContext } from "react";
import { useState } from "react"
import { CoffeeContext } from "../context/CoffeeContext";


export const FilterButtons = () => {

    const [toggle, setToggle] = useState('All Products');
    const [state, dispatch] = useContext(CoffeeContext);

    const handleclick = (e) => {
        if (e.target.value === 'All Products') {
            dispatch({
                type: 'all_products'
            })
        };

        if (e.target.value === 'Available Now') {
            dispatch({
                type: 'available_products',
            })
        };

        setToggle(e.target.value)

    }


    return (
        <div className='flex gap-4 justify-center mt-6 mb-12'>
            <button onClick={handleclick} value="All Products" className={`text-white px-2 py-1 rounded-lg cursor-pointer ${toggle === 'All Products' ? 'bg-grayV2' : null}`}>All Products</button>
            <button onClick={handleclick} value="Available Now" className={`text-white px-2 py-1 rounded-lg cursor-pointer ${toggle === 'Available Now' ? 'bg-grayV2' : null}`}>Available Now</button>
        </div>
    )
}
