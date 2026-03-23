import PrimeHero      from '../components/prime/PrimeHero/PrimeHero'
import PrimeStats     from '../components/prime/PrimeStats/PrimeStats'
import TechStack      from '../components/prime/TechStack/TechStack'
import PrimeServices  from '../components/prime/PrimeServices/PrimeServices'
import ValueProp      from '../components/prime/ValueProp/ValueProp'
import PrimeProcess   from '../components/prime/PrimeProcess/PrimeProcess'
import PrimeCTA       from '../components/prime/PrimeCTA/PrimeCTA'

function PrimePage() {
  return (
    <main>
      <PrimeHero />
      <PrimeStats />
      <TechStack />
      <PrimeServices />
      <ValueProp />
      <PrimeProcess />
      <PrimeCTA />
    </main>
  )
}

export default PrimePage