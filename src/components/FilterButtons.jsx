import React from 'react'
import { useReducer } from 'react'
import { CoffeeContext } from '../context/coffeeContext'
import { useContext } from 'react'
import { filterReducer } from './filterReducer'

export const FilterButtons = () => {

    const { dataCoffee } = useContext(CoffeeContext)

    const [coffees, dispacth] = useReducer(filterReducer, dataCoffee);

    const handleAllProducts = () => {
        const action = {
            type: "All Products",
            payload: "All Products",
        }
        dispacth(action)
    };

    const handleAvailableProducts = () => {
        const action = {
            type: "Available Now",
            payload: "Available Now",
        }
        dispacth(action)
    }

    return (
        <div className='flex gap-4 justify-center mt-6 mb-12'>
            <button onClick={handleAllProducts} value="All Products" className='bg-grayV2 text-white px-2 py-1 rounded-lg cursor-pointer'>All Products</button>
            <button onClick={handleAvailableProducts} value="Available Now" className=' text-white px-2 py-1 rounded-lg cursor-pointer'>Available Now</button>
        </div>
    )
}
