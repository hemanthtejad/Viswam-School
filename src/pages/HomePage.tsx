import React from 'react';
import VideoHero from '../components/VideoHero';
import AboutViswam from '../components/AboutViswam';
import LeadershipMessage from '../components/LeadershipMessage';
import Gallery from '../components/Gallery';
import QuickLinks from '../components/QuickLinks';
import VirtualTour from '../components/VirtualTour';
import Achievements from '../components/Achievements';
import Facilities from '../components/Facilities';

export default function HomePage() {
  return (
    <main>
      <VideoHero />
      <AboutViswam />
      <LeadershipMessage />
      <Gallery />
      <QuickLinks />
      <Achievements />
      <Facilities />
      <VirtualTour />
    </main>
  );
}