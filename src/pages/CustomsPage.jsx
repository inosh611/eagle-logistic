import ServiceSubHero   from '../components/services/ServiceSubHero/ServiceSubHero'
import CustomsDetail    from '../components/services/CustomsDetail/CustomsDetail'
import ServicesCTA      from '../components/services/ServicesCTA/ServicesCTA'
import { customsData }  from '../data/services'

function CustomsPage() {
  return (
    <main>
      <ServiceSubHero data={customsData.hero} />
      <CustomsDetail />
      <ServicesCTA />
    </main>
  )
}

export default CustomsPage