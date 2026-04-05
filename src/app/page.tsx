'use client';

import {
  HeroSection,
  ParticipantsCounterSection,
  AboutSection,
  CTASection,
  NewsSection,
  RegionalMapSection,
  DirectionsMapSection,
} from "@/components/sections";
import { DirectionsGrid } from "@/components/directions";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ParticipantsCounterSection />
      <AboutSection />
      <DirectionsMapSection />
      <DirectionsGrid />
      <NewsSection />
      <RegionalMapSection />
      <CTASection />
    </>
  );
}
