import AboutHero        from '../components/about/AboutHero/AboutHero'
import CompanyOverview  from '../components/about/CompanyOverview/CompanyOverview'
import MilestonesTimeline from '../components/about/MilestonesTimeline/MilestonesTimeline'
import EagleSpirit      from '../components/about/EagleSpirit/EagleSpirit'
import LeadershipTeam   from '../components/about/LeadershipTeam/LeadershipTeam'
import AboutCTA         from '../components/about/AboutCTA/AboutCTA'
import VisionMission         from '../components/about/VisionMission/VisionMission'

function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyOverview />
      <VisionMission />
      <MilestonesTimeline />
      <EagleSpirit />
      <LeadershipTeam />
      <AboutCTA />
    </main>
  )
}

export default AboutPage