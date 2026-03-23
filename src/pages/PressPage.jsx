import PressHero    from '../components/press/PressHero/PressHero'
import PressStats   from '../components/press/PressStats/PressStats'
import PressGrid    from '../components/press/PressGrid/PressGrid'
import MediaContact from '../components/press/MediaContact/MediaContact'

function PressPage() {
  return (
    <main>
      <PressHero />
      <PressStats />
      <PressGrid />
      {/* <MediaContact /> */}
    </main>
  )
}

export default PressPage