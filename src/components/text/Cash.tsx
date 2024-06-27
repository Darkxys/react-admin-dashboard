interface Props {
  amount: number;
}

export default function CashTextDisplay({ amount }: Props) {
  return (
    <div className="w-fit">
      <p className={amount < 0 ? 'text-red-400' : 'text-green-400'}>
        {amount < 0 ? '-' : '+'}
        {Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} $
      </p>
    </div>
  )
}
