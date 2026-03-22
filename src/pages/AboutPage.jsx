import AboutHero        from '../components/about/AboutHero/AboutHero'
import CompanyOverview  from '../components/about/CompanyOverview/CompanyOverview'
import MilestonesTimeline from '../components/about/MilestonesTimeline/MilestonesTimeline'
import EagleSpirit      from '../components/about/EagleSpirit/EagleSpirit'
import LeadershipTeam   from '../components/about/LeadershipTeam/LeadershipTeam'
import AboutCTA         from '../components/about/AboutCTA/AboutCTA'

function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyOverview />
      <MilestonesTimeline />
      <EagleSpirit />
      <LeadershipTeam />
      <AboutCTA />
    </main>
  )
}

export default AboutPage