import Head from 'next/head'
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='App'>
      <Head>
        <title>Forum App</title>
      </Head>
      <h1>Lets build a forum app</h1>
      {/* Header */}
<Header/>

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}
