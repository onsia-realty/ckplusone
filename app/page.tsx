'use client'

import Hero from '@/components/Hero'
import Business from '@/components/Business'
import ProjectHistory from '@/components/ProjectHistory'
import News from '@/components/News'
import CustomerForm from '@/components/CustomerForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Business />
      <ProjectHistory />
      <News />
      <CustomerForm />
    </>
  )
}