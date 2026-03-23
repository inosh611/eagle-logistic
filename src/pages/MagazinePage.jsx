import MagazineHero       from '../components/magazine/MagazineHero/MagazineHero'
import MagazineStatsBar   from '../components/magazine/MagazineStatsBar/MagazineStatsBar'
import LatestEdition      from '../components/magazine/LatestEdition/LatestEdition'
import MagazineArchiveGrid from '../components/magazine/MagazineArchiveGrid/MagazineArchiveGrid'
import MagazineContact    from '../components/magazine/MagazineContact/MagazineContact'

function MagazinePage() {
  return (
    <main>
      <MagazineHero />
      <MagazineStatsBar />
      <LatestEdition />
      <MagazineArchiveGrid />
      <MagazineContact />
    </main>
  )
}

export default MagazinePage