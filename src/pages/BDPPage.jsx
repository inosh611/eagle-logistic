import BDPHero            from '../components/bdp/BDPHero/BDPHero'
import BDPOverview        from '../components/bdp/BDPOverview/BDPOverview'
import GlobalNetworkMap   from '../components/bdp/GlobalNetworkMap/GlobalNetworkMap'
import DigitalTools       from '../components/bdp/DigitalTools/DigitalTools'
import IndustryVerticals  from '../components/bdp/IndustryVerticals/IndustryVerticals'
import PartnershipBenefits from '../components/bdp/PartnershipBenefits/PartnershipBenefits'

function BDPPage() {
  return (
    <main>
      <BDPHero />
      <BDPOverview />
      <GlobalNetworkMap />
      <DigitalTools />
      <IndustryVerticals />
      <PartnershipBenefits />
    </main>
  )
}

export default BDPPage