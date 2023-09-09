import { Card, Divider, Subtitle, Text } from '@tremor/react';

export default function Home() {
  return (
    <main className='text-6xl'>
      <Card className=''>
        <Text className='text-6xl font-bold text-center mb-10'>Weather AI</Text>
        <Subtitle className='text-xl text-center'>
          Powered by OpenAI, Nex.js 13.4, TailwindCSS, Tremor 2.0 + More!
        </Subtitle>

        <Divider className='my-10' />
      </Card>
    </main>
  );
}
