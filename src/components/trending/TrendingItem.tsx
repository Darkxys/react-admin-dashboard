import { Entity } from '@/data/stocks';
import CashTextDisplay from '../text/Cash';
import { Button } from '../ui/button';

interface Props {
  stock: Entity;
}

export default function TrendingItem({ stock }: Props) {
  return (
    <div className='flex flex-col border border-slate-800 rounded-[10px] p-2 sm:p-4 gap-4'>
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
            <CashTextDisplay amount={stock.share_usd * stock.daily_increase} />
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-6'>
        <Button className='w-full' variant={'destructive'}>Short</Button>
        <Button className='w-full' variant={'secondary'}>Buy</Button>
      </div>
    </div>
  )
}
