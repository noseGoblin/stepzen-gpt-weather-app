import { Card, Subtitle, Text } from '@tremor/react';

export default function Home() {
  return (
    <main className=''>
      <Card className=''>
        <Text>Weather AI</Text>
        <Subtitle>
          Powered by OpenAI, Nex.js 13.4, TailwindCSS, Tremor 2.0 + More!
        </Subtitle>
      </Card>
    </main>
  );
}
