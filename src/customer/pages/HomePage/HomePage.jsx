import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

function HomePage() {
  return (
    <div>
      <MainCarosel/>

      <div className='space-y-10 py-20'>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
      </div>
    </div>
  )
}

export default HomePage
