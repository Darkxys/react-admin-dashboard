import React from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import { stock_data } from '@/data/stocks';
import TrendingItem from './TrendingItem';

interface Props {
  classNames?: string;
}

export default function TrendingStocks({ classNames }: Props) {
  const data = stock_data
    .sort((a, b) =>
      (b.daily_increase * b.share_usd) - (a.daily_increase * a.share_usd)
    )
    .slice(0, 3);

  return (
    <Card className={`flex flex-col capitalize gap-10 p-4 lg:p-10 ${classNames}`}>
      <CardTitle>Trending Stocks</CardTitle>
      <CardContent>
        <div className='flex flex-col gap-4'>
          {data.map(stock => <TrendingItem stock={stock} />)}
        </div>
      </CardContent>
    </Card>
  )
}
