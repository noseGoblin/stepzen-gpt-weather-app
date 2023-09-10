'use client';

import { Card, Color, Metric, Text } from '@tremor/react';

type Props = {
  title: string;
  metric: string;
  color?: Color;
};

function StatCard({ title, metric, color }: Props) {
  return (
    <Card decoration='top' decorationColor={color}>
      <Text>{title}</Text>
      <Metric className='text-3xl'>{metric}</Metric>
    </Card>
  );
}

export default StatCard;
