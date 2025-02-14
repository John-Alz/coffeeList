import React from 'react'
import { CoffeeList } from './components/CoffeeList'
import { CoffeeHeader } from './components/CoffeeHeader'
import bgCoffe from './assets/bg-cafe-lg.jpg'
import { CoffeeProvider } from './context/CoffeeProvider'
import { FilterButtons } from './components/FilterButtons'
import './app.css'

export const CoffeeApp = () => {
    return (
        <div className="main">
            <div className='w-[90%] xl:w-[80%] z-10 m-auto pt-16 pb-16 bg-primary font-dmSans rounded-2xl absolute top-48 left-0 right-0'>
                <CoffeeProvider>
                    <CoffeeHeader />
                    <FilterButtons />
                    <CoffeeList />
                </CoffeeProvider>

            </div>
        </div>
    )
}
