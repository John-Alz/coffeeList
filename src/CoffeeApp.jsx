import React from 'react'
import { CoffeeList } from './components/CoffeeList'
import { CoffeeHeader } from './components/CoffeeHeader'
import bgCoffe from './assets/bg-cafe-lg.jpg'
import { CoffeeProvider } from './context/CoffeeProvider'

export const CoffeeApp = () => {
    return (
        <div className='bg-secondary h-screen relative'>
            <img src={bgCoffe} alt='bg' />
            <div className='w-[80%] z-10 m-auto pt-16 pb-16 bg-primary font-dmSans rounded-2xl absolute top-38 left-0 right-0'>
                <CoffeeProvider>
                    <CoffeeHeader />
                    <CoffeeList />
                </CoffeeProvider>

            </div>
        </div>
    )
}
