import ServiceSubHero  from '../components/services/ServiceSubHero/ServiceSubHero'
import BPODetail       from '../components/services/BPODetail/BPODetail'
import ServicesCTA     from '../components/services/ServicesCTA/ServicesCTA'
import { bpoData }     from '../data/services'

function BPOPage() {
  return (
    <main>
      <ServiceSubHero data={bpoData.hero} />
      <BPODetail />
      <ServicesCTA />
    </main>
  )
}

export default BPOPage