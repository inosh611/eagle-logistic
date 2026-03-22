import ServiceSubHero      from '../components/services/ServiceSubHero/ServiceSubHero'
import SpecializedDetail   from '../components/services/SpecializedDetail/SpecializedDetail'
import ServicesCTA         from '../components/services/ServicesCTA/ServicesCTA'
import { specializedData } from '../data/services'

function SpecializedPage() {
  return (
    <main>
      <ServiceSubHero data={specializedData.hero} />
      <SpecializedDetail />
      <ServicesCTA />
    </main>
  )
}

export default SpecializedPage