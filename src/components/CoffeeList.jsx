import React from 'react'
import { CoffeeCard } from './CoffeeCard';
import { useFecth } from '../hooks/useFetch';
import { FilterButtons } from './FilterButtons';
import { useReducer } from 'react';
import { coffeesReducer } from './coffeesReducer';
import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';


export const CoffeeList = () => {

    const [state, dispatch] = useContext(CoffeeContext)

    useFecth('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json', dispatch)


    return (
        <>
            <FilterButtons />
            {
                state.loading && <h2 className='text-4xl text-white text-center font-bold'>Cargando...</h2>
            }
            <div className='w-[80%] m-auto grid grid-cols-3 gap-y-10'>

                {
                    state.coffees.map((coffe) => (
                        <>
                            <CoffeeCard key={coffe.id} data={coffe} />
                        </>
                    ))
                }
            </div>
        </>
    )
}
