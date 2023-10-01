import React from 'react';
import Hero from '../../Hero';
import NewestDeals from '../../NewestDeals';
import AboutUs from '../../AboutUs';
import BestDeals from '../../BestDeals';
import { CarouselCustomNavigation } from '../../Carousel/CarouselCustomNavigatio';

const Home = () => {
      return (
            <>
                  <CarouselCustomNavigation />
                  <Hero />
                  <NewestDeals />
                  <AboutUs />
                  <BestDeals />

            </>
      );
};

export default Home;