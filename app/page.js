import Image from 'next/image'
import Header from '@/app/components/Header'
import Sidebar from '@/app/components/Sidebar'
import TopCards from '@/app/components/TopCards'
export default function Home () {
  return (
    <main className='bg-gray-300 min-h-screen'>
      <Header />
      <TopCards />
    </main>
  )
}
