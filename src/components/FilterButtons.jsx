import React from 'react'

export const FilterButtons = () => {
    return (
        <div className='flex gap-4 justify-center mt-6'>
            <button className='bg-grayV2 text-white px-2 py-1 rounded-lg cursor-pointer'>All Products</button>
            <button className=' text-white px-2 py-1 rounded-lg cursor-pointer'>Available Now</button>
        </div>
    )
}
