import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './components/Hero'
import NewestDeals from './components/NewestDeals'
import AboutUs from './components/AboutUs'
import BestDeals from './components/BestDeals'
import Footer from './components/Footer'
import { AccordionAlwaysOpen } from './components/AccordionAlwaysOpen'
import { StickyNavbar } from './pages/Nabvar/StickyNavbar'
import { CarouselCustomNavigation } from './components/Carousel/CarouselCustomNavigatio'
import { FooterWithSocialLinks } from './pages/Footer/FooterWithSocialLinks'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <>
      <div className="App  w-11/12 md:w-4/5 m-auto">
        <StickyNavbar />

        <Outlet />
        <FooterWithSocialLinks />
      </div>

    </>
  )
}

