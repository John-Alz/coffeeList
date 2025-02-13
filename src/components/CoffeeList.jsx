import React from 'react'
import { useFecth } from '../hooks/useFetch'
import { CoffeeCard } from './CoffeeCard';
import { useContext } from 'react';
import { CoffeeContext } from '../context/coffeeContext';

export const CoffeeList = () => {

    const { dataCoffee, loading } = useContext(CoffeeContext);


    return (
        <>
            {
                loading && <h2 className='text-4xl text-white text-center font-bold'>Cargando...</h2>
            }
            <div className='w-[80%] m-auto grid grid-cols-3 gap-y-10'>

                {
                    dataCoffee?.map((coffe) => (
                        <>
                            <CoffeeCard key={coffe.id} data={coffe} />
                        </>
                    ))
                }
            </div>
        </>
    )
}
