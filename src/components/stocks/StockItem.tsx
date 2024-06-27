import { Entity } from '@/data/stocks'
import React from 'react'
import PercentageTextDisplay from '../text/Percentage';

interface Props {
  stock: Entity;
}

export default function StockItem({ stock }: Props) {
  return (
    <div className='flex flex-row justify-between capitalize' key={`my-stock-list-${stock.name}`}>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-row'>
          <img src={stock.icon} />
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>{stock.name}</p>
          <p className='text-slate-300 text-sm'>{stock.share} Shares</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='ml-auto'>
          <p className='text-md'>{stock.share_usd} $</p>
        </div>
        <div className='ml-auto'>
          <PercentageTextDisplay percentage={stock.daily_increase} />
        </div>
      </div>
    </div>
  )
}
