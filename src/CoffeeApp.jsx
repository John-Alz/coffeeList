import React from 'react'
import { CoffeeList } from './components/CoffeeList'
import { CoffeeHeader } from './components/CoffeeHeader'
import { FilterButtons } from './components/FilterButtons'

export const CoffeeApp = () => {
    return (
        <div className='w-[80%] m-auto bg-primary font-dmSans rounded-2xl'>
            <CoffeeHeader />
            <FilterButtons />
            <CoffeeList />
        </div>
    )
}
