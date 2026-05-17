import React from 'react'
import StudentfinanceHeroSection from '@/components/studentFinance/Hero'
import FinanceStatsSection from '@/components/studentFinance/Overview'
import ProcessSection from '@/components/studentFinance/Process'

const page = () => {
  return (
    <main>
      <StudentfinanceHeroSection/>
      <FinanceStatsSection/>
      <ProcessSection/>
        
    </main>
  )
}

export default page