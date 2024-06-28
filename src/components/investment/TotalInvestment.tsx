import { initial_portfolio_value, transaction_data } from '@/data/stocks';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardTitle } from '../ui/card';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/../tailwind.config';

interface Props {
  classNames?: string;
}

interface InvestmentData {
  name: string;
  liquidity: number;
}

export default function TotalInvestment({ classNames }: Props) {
  function formatDate(date: Date) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear().toString();

    return `${month} ${day} ${year}`;
  }

  const data = transaction_data
    .sort(
      (a, b) => Date.parse(a.tx_date.toISOString()) - Date.parse(b.tx_date.toISOString())
    )
    .reduce(
      (acc: Array<InvestmentData>, curr) => {
        const current_liquidity = curr.value * (curr.is_buy ? -1 : 1);

        if (acc.length > 0) {
          const last_value = acc[acc.length - 1];
          acc.push({
            name: formatDate(curr.tx_date),
            liquidity: current_liquidity + last_value.liquidity
          });
        } else {
          acc.push({
            name: formatDate(curr.tx_date),
            liquidity: current_liquidity + initial_portfolio_value
          })
        }

        return acc;
      },
      []
    );

  function formatNumber(num: number) {
    if (num >= 1e12) {
      return (num / 1e12).toFixed(1) + 'T';
    } else if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + 'B';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + 'K';
    } else {
      return num.toFixed(1);
    }
  }

  const twFullConfig = resolveConfig(tailwindConfig)
  return (
    <Card className={`flex flex-col p-4 lg:p-10 justify-between ${classNames}`}>
      <CardTitle className='mb-10'>Total Investment</CardTitle>
      <CardContent className='hidden p-0 md:flex w-full md:h-[25rem]' >
        <ResponsiveContainer >
          <AreaChart
            data={data}
          >
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(v: number) => `${formatNumber(v)} $`} />
            <Tooltip
              contentStyle={{
                backgroundColor: twFullConfig.theme.colors.slate[900]
              }}
            />
            <Area
              type="monotone"
              dataKey="liquidity"
              stroke={twFullConfig.theme.colors.slate[400]}
              fill={twFullConfig.theme.colors.slate[700]}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
      <CardContent className='w-full md:hidden h-[25rem]' >
        <ResponsiveContainer >
          <AreaChart
            data={data}
          >
            <Tooltip
              contentStyle={{
                backgroundColor: twFullConfig.theme.colors.slate[900]
              }}
            />
            <Area
              type="monotone"
              dataKey="liquidity"
              stroke={twFullConfig.theme.colors.slate[400]}
              fill={twFullConfig.theme.colors.slate[700]}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
