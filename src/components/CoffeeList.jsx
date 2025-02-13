import React from 'react'
import { useFecth } from '../hooks/useFetch'
import { CoffeeCard } from './CoffeeCard';

export const CoffeeList = () => {

    const { dataCoffe } = useFecth('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json');
    console.log(dataCoffe);


    return (
        <div>
            <CoffeeCard data={data} />
        </div>
    )
}
