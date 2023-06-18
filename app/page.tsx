import {
  EarlyAccess,
  FeatureSection,
  HeroSections,
  SeeHow,
  Testimonial,
} from "./components/sections";

export default function Home() {
  return (
    <main>
      <HeroSections />
      <FeatureSection />
      <SeeHow />
      <Testimonial />
      <EarlyAccess />
    </main>
  );
}
