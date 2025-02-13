import React from 'react'
import star from '../assets/Star_fill.svg'
import emptyStar from '../assets/Star.svg'

export const CoffeeCard = ({ data }) => {
    console.log(data);

    return (
        <article className='text-white w-card flex flex-col gap-3'>
            <div className='relative'>
                <img className='rounded-2xl' src={data.image} alt={data.name} />
                {
                    data.popular && <p className='w-18 bg-yellow text-black font-bold text-tiny px-2 py-1 rounded-full text-center absolute top-3 left-3'>Popular</p>
                }
            </div>
            <div className='flex justify-between'>
                <p className='text-lg'>{data.name}</p>
                <p className='bg-green text-black text-sm font-bold px-2 py-1 rounded-lg'>{data.price}</p>
            </div>
            {
                data.rating > 1 ?
                    <div className='flex justify-between' >
                        <div className='flex gap-1'>
                            <span className='flex gap-2'><img src={star} alt='star' />{data.rating}</span>
                            <span className='text-grayV1'>({data.votes} votes)</span>
                        </div>
                        {
                            !data.available && <p className='text-red ml-2'>Sold out</p>
                        }
                    </div>
                    :
                    <div className='flex gap-1' >
                        <span className='flex gap-2 text-grayV1'><img src={emptyStar} alt='star' />No ratings</span>
                    </div>
            }
        </article>
    )
}
