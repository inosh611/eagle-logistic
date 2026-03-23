import HeroSlider        from '../components/sections/HeroSlider/HeroSlider'
import BrandsMarquee     from '../components/sections/BrandsMarquee/BrandsMarquee'
import ExperienceSection from '../components/sections/ExperienceSection/ExperienceSection'
import DeliveringSection from '../components/sections/DeliveringSection/DeliveringSection'
import ServicesCarousel  from '../components/sections/ServicesCarousel/ServicesCarousel'
import HowItWorks        from '../components/sections/HowItWorks/HowItWorks'
import FeaturesStrip     from '../components/sections/FeaturesStrip/FeaturesStrip'
import EstimateSection   from '../components/sections/EstimateSection/EstimateSection'
import TeamSection       from '../components/sections/TeamSection/TeamSection'
import TestimonialSection from '../components/sections/TestimonialSection/TestimonialSection'
import SupplyChainBanner from '../components/sections/SupplyChainBanner/SupplyChainBanner'
import VideoCallSection  from '../components/sections/VideoCallSection/VideoCallSection'
import IndustryVerticals from '../components/sections/IndustryVerticals/IndustryVerticals'

function HomePage() {
  return (
    <main>
      <HeroSlider />
      <BrandsMarquee />
      <ExperienceSection />
      <DeliveringSection />
      <ServicesCarousel />
      <IndustryVerticals />
      <HowItWorks />
      <FeaturesStrip />
      <EstimateSection />
      <TeamSection />
      <TestimonialSection />
      <SupplyChainBanner />
      <VideoCallSection />
    </main>
  )
}

export default HomePage
