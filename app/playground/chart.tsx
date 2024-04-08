'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

const data = [
  {
    Month: 'Jan 21',
    Sales: 2890,
    Profit: 2400
  },
  {
    Month: 'Feb 25',
    Sales: 1890,
    Profit: 1398
  },
  {
    Month: 'Feb 11',
    Sales: 1890,
    Profit: 1398
  },
  {
    Month: 'Feb 20',
    Sales: 1890,
    Profit: 1398
  },
  {
    Month: 'Feb 20',
    Sales: 6000,
    Profit: 5454
  },
  {
    Month: 'Jan 22',
    Sales: 3890,
    Profit: 2980
  }
];

export default function Example() {
  return (
    <Card className="mt-8">
      <Title>Usage</Title>
      <Text>Usage data</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['Sales', 'Profit']}
        index="Month"
        colors={['indigo', 'fuchsia']}
        valueFormatter={(number: number) =>
          `sh ${Intl.NumberFormat('us').format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
