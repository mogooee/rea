import Head from 'next/head'

import { api } from '@/utils/api'

export default function Home() {
  const hello = api.post.hello.useQuery({ text: 'from tRPC' })

  return (
    <>
      <Head>
        <title>별별부동산</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>별별부동산</div>
    </>
  )
}
