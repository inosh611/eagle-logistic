import ServiceSubHero    from '../components/services/ServiceSubHero/ServiceSubHero'
import FreightDetail     from '../components/services/FreightDetail/FreightDetail'
import ServicesCTA       from '../components/services/ServicesCTA/ServicesCTA'
import { freightData }   from '../data/services'

function FreightPage() {
  return (
    <main>
      <ServiceSubHero data={freightData.hero} />
      <FreightDetail />
      <ServicesCTA />
    </main>
  )
}

export default FreightPage