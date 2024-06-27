import { transaction_data } from "@/data/stocks";
import { Card, CardContent, CardTitle } from "../ui/card";
import TransactionItem from "./TransactionItem";

interface Props {
  classNames: string;
}

export default function LatestTransaction({ classNames }: Props) {
  const data = transaction_data
    .sort((a, b) => Date.parse(b.tx_date.toISOString()) - Date.parse(a.tx_date.toISOString()))
    .slice(0, 6);

  return (
    <Card className={`flex flex-col capitalize p-4 lg:p-10 gap-10 ${classNames}`}>
      <CardTitle>Latest Transaction</CardTitle>
      <CardContent>
        <div className="flex flex-col gap-8">
          {data.map(transaction => <TransactionItem transaction={transaction} />)}
        </div>
      </CardContent>
    </Card>
  )
}
