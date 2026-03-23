import { useState } from 'react'
import { pressReleases, pressCategories } from '../../../data/press'
import styles from './PressGrid.module.css'

function FeaturedCard({ article }) {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredImg}>
        <img src={article.image} alt={article.title} loading="lazy"/>
        <div className={styles.featuredOverlay}/>
        <span className={styles.featuredBadge}>Featured</span>
      </div>
      <div className={styles.featuredContent}>
        <div className={styles.featuredMeta}>
          <span className={styles.catTag}>{article.category}</span>
          <span className={styles.metaDot}/>
          <span className={styles.metaText}>{article.date}</span>
          <span className={styles.metaDot}/>
          <span className={styles.metaText}>{article.readTime}</span>
        </div>
        <h2 className={styles.featuredTitle}>{article.title}</h2>
        <p className={styles.featuredExcerpt}>{article.excerpt}</p>
        <a href={`/press/${article.id}`} className={styles.featuredBtn}>
          Read Full Story
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            width={16} height={16}>
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

function PressCard({ article }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={article.image} alt={article.title} loading="lazy"/>
        <div className={styles.cardImgOverlay}/>
        <span
          className={styles.cardCat}
          style={{
            background: article.category === 'Awards' ? '#854f0b' :
                        article.category === 'Events' ? '#0f6e56' :
                        article.category === 'Milestones' ? '#993556' :
                        article.category === 'Partnerships' ? '#534ab7' :
                        'var(--accent-dark)'
          }}
        >
          {article.category}
        </span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.metaText}>{article.date}</span>
          <span className={styles.metaDot}/>
          <span className={styles.metaText}>{article.readTime}</span>
        </div>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        <p className={styles.cardExcerpt}>{article.excerpt}</p>
        <a href={`/press/${article.id}`} className={styles.readMore}>
          Read More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            width={14} height={14}>
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

function PressGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(9)

  const featured = pressReleases.find(p => p.featured)
  const rest = pressReleases.filter(p => !p.featured)

  const filtered = activeCategory === 'All'
    ? rest
    : rest.filter(p => p.category === activeCategory)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <section className={styles.section} id="press-grid">

      {/* Section header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.label}>In the News</div>
          <h2 className={styles.title}>Press Releases & Media Coverage</h2>
        </div>
        {/* Category filters */}
        <div className={styles.filters}>
          {pressCategories.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => { setActiveCategory(cat); setVisibleCount(9) }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured article */}
      {activeCategory === 'All' && featured && (
        <FeaturedCard article={featured} />
      )}

      {/* Press grid */}
      <div className={styles.grid}>
        {visible.map(article => (
          <PressCard key={article.id} article={article} />
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className={styles.loadMore}>
          <button
            className={styles.loadMoreBtn}
            onClick={() => setVisibleCount(prev => prev + 6)}
          >
            Load More Stories
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              width={16} height={16}>
              <line x1="12" y1="5" x2="12" y2="19"/>
              <polyline points="19 12 12 19 5 12"/>
            </svg>
          </button>
          <span className={styles.countText}>
            Showing {visible.length} of {filtered.length} stories
          </span>
        </div>
      )}

    </section>
  )
}

export default PressGrid