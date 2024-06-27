interface Props {
  amount: number;
}

export default function CashTextDisplay({ amount }: Props) {
  return (
    <div className="w-fit">
      <p className={amount < 0 ? 'text-red-400' : 'text-green-400'}>
        {amount < 0 ? '-' : '+'}{Math.abs(amount).toFixed(2)} $
      </p>
    </div>
  )
}
