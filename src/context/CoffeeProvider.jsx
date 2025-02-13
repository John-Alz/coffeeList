import React from 'react'
import { CoffeeContext } from './coffeeContext'
import { useFecth } from '../hooks/useFetch'

export const CoffeeProvider = ({ children }) => {

    const { dataCoffee, loading } = useFecth('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json');



    return (
        <CoffeeContext.Provider value={{ dataCoffee, loading }}>
            {children}
        </CoffeeContext.Provider>
    )
}
