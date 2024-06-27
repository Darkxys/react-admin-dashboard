interface Props {
  percentage: number;
}

export default function PercentageTextDisplay({ percentage } : Props) {
  const percentage_on_hundred = (percentage * 100).toFixed(2);

  return (
    <div className="w-fit">
      <p className={percentage < 0 ? 'text-red-400' : 'text-green-400'}>{percentage_on_hundred} %</p>
    </div>
  )
}
