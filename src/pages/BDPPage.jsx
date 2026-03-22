import BDPHero            from '../components/bdp/BDPHero/BDPHero'
import BDPOverview        from '../components/bdp/BDPOverview/BDPOverview'
import GlobalNetworkMap   from '../components/bdp/GlobalNetworkMap/GlobalNetworkMap'
import DigitalTools       from '../components/bdp/DigitalTools/DigitalTools'
import IndustryVerticals  from '../components/bdp/IndustryVerticals/IndustryVerticals'
import PartnershipBenefits from '../components/bdp/PartnershipBenefits/PartnershipBenefits'
import BDPInSriLanka      from '../components/bdp/BDPInSriLanka/BDPInSriLanka'
import BDPInternational   from '../components/bdp/BDPInternational/BDPInternational'

function BDPPage() {
  return (
    <main>
      <BDPHero />
      <BDPOverview />
      <BDPInSriLanka />
      <BDPInternational />
      <GlobalNetworkMap />
      <DigitalTools />
      <IndustryVerticals />
      <PartnershipBenefits />
    </main>
  )
}

export default BDPPage