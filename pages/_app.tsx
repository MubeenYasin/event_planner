import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nave from '../components/header/Nave'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex justify-center '>
      <div className='w-11/12'>
        <Nave />
        <Component {...pageProps} />
      </div>

    </div>
  )
}
