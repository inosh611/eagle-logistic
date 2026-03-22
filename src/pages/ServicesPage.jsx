import ServicesHero     from '../components/services/ServicesHero/ServicesHero'
import ServicesGrid     from '../components/services/ServicesGrid/ServicesGrid'
import ServicesCTA      from '../components/services/ServicesCTA/ServicesCTA'

function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </main>
  )
}

export default ServicesPage