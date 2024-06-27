import { Transaction, stock_data } from "@/data/stocks"
import CashTextDisplay from "../text/Cash";

interface Props {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: Props) {
  const stock = stock_data.find(s => s.name === transaction.asset);
  if (!stock) {
    return <></>
  }
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // Get the day of the month
  const day = transaction.tx_date.getDate();
  // Get the month name from the array using the month index
  const month = monthNames[transaction.tx_date.getMonth()];
  // Get the last two digits of the year
  const year = transaction.tx_date.getFullYear().toString().slice(-2);
  // Format the date string
  const formattedDate = `${day} ${month}, ${year}`;

  return (
    <div className="flex flex-col sm:flex-row capitalize justify-between w-full gap-2">
      <div className="flex flex-row justify-between sm:w-[50%]">
        <div className="flex flex-row gap-4">
          <img className="max-w-[40px]" src={stock.icon} />
          <div className="flex flex-col">
            <p className="font-bold">{stock.name}</p>
            <p className="text-sm text-slate-300">{transaction.is_buy ? 'Buy' : 'Sell'} stock</p>
          </div>
        </div>
        <div className="flex flex-col w-fit">
          <p className="font-bold">Interest</p>
          <p className="text-sm text-slate-300">{transaction.interest_rate}%</p>
        </div>
      </div>
      <div className="flex flex-row-reverse w-full sm:w-fit justify-between sm:justify-normal sm:flex-col">
        <CashTextDisplay amount={transaction.is_buy ? -transaction.value : transaction.value} />
        <p className="w-fit ml-0 sm:ml-auto text-sm text-slate-300">{formattedDate}</p>
      </div>
    </div>
  )
}
