import NewsHero from '../components/news/NewsHero/NewsHero'
import CommunityBanner from '../components/news/CommunityBanner/CommunityBanner'
import FeaturedArticle from '../components/news/FeaturedArticle/FeaturedArticle'
import ArticleGrid from '../components/news/ArticleGrid/ArticleGrid'
import MagazineArchive from '../components/news/MagazineArchive/MagazineArchive'
import PressReleases from '../components/news/PressReleases/PressReleases'

function NewsPage() {
  return (
    <main>
      <NewsHero />
      <CommunityBanner />
      <FeaturedArticle />
      <ArticleGrid />
      <MagazineArchive />
      <PressReleases />
    </main>
  )
}

export default NewsPage