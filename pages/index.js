import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({ session} ) {
  if(!session) return <Login/>
  return (
    <div className='App'>
      <Head>
        <title>TechThread</title>
      </Head>
      {/* Header */}
<Header/>

      <main className='flex'>
        {/* Sidebar */}
        <Sidebar/>
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