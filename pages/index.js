import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import LandingPage from "@/components/LandingPage"
import OurServices from "@/components/OurServices"
import KeyFeatures from '@/components/KeyFeatures'
import HosDepartment from '@/components/HosDepartment'
import OurDoctors from '@/components/OurDoctors'
import LatestNews from '@/components/LatestNews'
import Testimonials from '@/components/Testimonials'
import WhatsappIntegration from '@/components/WhatsappIntegration'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Vanshan Pharmaceuticals</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <LandingPage />
        {/* <KeyFeatures/> */}
        <OurDoctors />
        {/* <OurServices /> */}
        {/* <LatestNews /> */}
        {/* <HosDepartment/> */}
        <WhatsappIntegration />
        <Testimonials />
      </main>
    </>
  )
}
