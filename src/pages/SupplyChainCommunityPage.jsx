import CommunityHero         from '../components/community/CommunityHero/CommunityHero'
import CommunityStatsBar     from '../components/community/CommunityStatsBar/CommunityStatsBar'
import HowWeDoIt             from '../components/community/HowWeDoIt/HowWeDoIt'
import SupplyChainForums     from '../components/community/SupplyChainForums/SupplyChainForums'
import ConnectingProfessionals from '../components/community/ConnectingProfessionals/ConnectingProfessionals'
import MagazineSection       from '../components/community/MagazineSection/MagazineSection'
import CommunityCTA          from '../components/community/CommunityCTA/CommunityCTA'

function SupplyChainCommunityPage() {
  return (
    <main>
      <CommunityHero />
      <CommunityStatsBar />
      <HowWeDoIt />
      <SupplyChainForums />
      <ConnectingProfessionals />
      <MagazineSection />
      <CommunityCTA />
    </main>
  )
}

export default SupplyChainCommunityPage