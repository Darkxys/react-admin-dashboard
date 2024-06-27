import BrandCarousel from "./components/carousel/BrandCarousel"
import TotalInvestment from "./components/investment/TotalInvestment"
import MyStocks from "./components/stocks/MyStocks"
import LatestTransaction from "./components/transactions/LatestTransaction"
import TrendingStocks from "./components/trending/TrendingStocks"

function App() {
  return (
    <div className="bg-slate-900 w-[100%] h-fit py-8">
      <div className="w-[87.5%] m-auto flex flex-col gap-8">
        <BrandCarousel />
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <TotalInvestment classNames="w-full lg:w-7/12" />
          <MyStocks classNames="w-full lg:w-5/12" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <TrendingStocks classNames="w-full lg:w-5/12" />
          <LatestTransaction classNames="w-full lg:w-7/12" />
        </div>
      </div>
    </div>
  )
}

export default App
