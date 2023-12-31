import Image from 'next/image'
import Header from '@/app/components/Header'
import Sidebar from '@/app/components/Sidebar'
import TopCards from '@/app/components/TopCards'
import BarChart from '@/app/components/BarChart'
import { RecentOrders } from '@/app/components/RecentOrders'
export default function Home () {
  return (
    <main className='bg-gray-300 min-h-screen'>
      <Header />
      <TopCards />
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  )
}
