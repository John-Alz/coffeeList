import React from 'react'
import { useFecth } from '../hooks/useFetch'
import { CoffeeCard } from './CoffeeCard';

export const CoffeeList = () => {

    const { dataCoffe, loading } = useFecth('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json');

    return (
        <>
            {
                loading && <h2 className='text-4xl text-white text-center font-bold'>Cargando...</h2>
            }
            <div className='w-[80%] m-auto grid grid-cols-3 gap-y-10'>

                {
                    dataCoffe.map((coffe) => (
                        <>
                            <CoffeeCard key={coffe.id} data={coffe} />
                        </>
                    ))
                }
            </div>
        </>
    )
}
