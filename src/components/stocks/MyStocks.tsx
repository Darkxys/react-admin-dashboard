import { stock_data } from '@/data/stocks';
import { Card, CardContent, CardTitle } from '../ui/card';
import StockItem from './StockItem';

interface Props {
  classNames?: string
}

export default function MyStocks({ classNames }: Props) {
  const data = stock_data.sort((a, b) => b.share - a.share).slice(0, 5);

  return (
    <Card className={`p-4 lg:p-10 flex flex-col gap-14 ${classNames}`}>
      <CardTitle>My Stocks</CardTitle>
      <CardContent>
        <div className='flex flex-col gap-10'>
          { data.map(stock => <StockItem stock={stock} />) }
        </div>
      </CardContent>
    </Card>
  )
}
