import { Card, CardContent, CardTitle } from '../ui/card';

interface Props {
  classNames?: string;
}

export default function TotalInvestment({ classNames }: Props) {
  const data = [];
  return (
    <Card className={`flex flex-col p-4 lg:p-10 gap-10 ${classNames}`}>
      <CardTitle>Total Investment</CardTitle>
      <CardContent>

      </CardContent>
    </Card>
  )
}
