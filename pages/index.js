import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='App'>
      <Head>
        <title>TechThread</title>
      </Head>
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


export async function getServerSideProps(context) {
  // Context refers to the request that comes through when a user tries to access the page
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}