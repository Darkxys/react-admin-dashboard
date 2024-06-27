import logo from "@/assets/carousel/apple.svg"
import { Separator } from '@radix-ui/react-separator'
import { Card, CardContent } from '../ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { stock_data } from "@/data/stocks"
import BrandItem from "./BrandItem"

interface Props {
  classNames?: string
}

export default function BrandCarousel({ classNames }: Props) {
  const data = stock_data.sort((a, b) => b.return - a.return).slice(0, 6);

  return (
    <Card className={`rounded-none select-none ${classNames}`}>
      <CardContent className="w-full">
        <Carousel>
          <CarouselPrevious variant={'secondary'} />
          <CarouselContent className="-ml-0">
            {data.map((stock, index) => (
              <CarouselItem key={index} className="pl-0 lg:basis-1/4">
                <Card className={`rounded-none border-0 ${index + 1 < data.length ? 'border-r-[1px]' : ''}`}>
                  <CardContent className="flex items-center justify-center p-6">
                    <BrandItem entity={stock} />
                  </CardContent>
                </Card>
                <Separator className="border-green-500" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext variant={'secondary'} />
        </Carousel>
      </CardContent>
    </Card>
  )
}
