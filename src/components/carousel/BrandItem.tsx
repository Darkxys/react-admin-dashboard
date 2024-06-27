import { Entity } from '@/data/stocks';
import { CardContent } from '../ui/card';
import PercentageTextDisplay from '../text/Percentage';

interface Props {
  entity: Entity;
}

export default function BrandItem({ entity }: Props) {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col xl:flex-row justify-between w-full'>
        <div className='flex flex-row w-fit mx-auto xl:mx-0 gap-3'>
          <img src={entity.icon} className='max-w-[40px]' />
          <p className='capitalize h-fit my-auto text-xl font-bold'>
            {entity.name}
          </p>
        </div>
        <img src={entity.graph} className='w-fit mx-auto xl:mx-0' />
      </div>
      <div className='flex flex-row justify-between w-full'>
        <p className='text-sm text-slate-300'>Share Price</p>
        <p className='text-md'>{entity.share_usd} $</p>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <p className='text-sm text-slate-300'>Total Return</p>
        <PercentageTextDisplay percentage={entity.daily_increase} />
      </div>
    </div>
  )
}
