import Head from 'next/head'
import Nave from '../components/header/Nave'
import HomeLayout from './dashboard/HomeLayout'
import SignIn from './users/SignIn'
import SignUp from './users/SignUp'

export default function Home() {
  return (
    <>
      <Head>
        <title>Event Planner</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SignUp />
    </>
  )
}
