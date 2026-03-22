import { useParams, Link } from 'react-router-dom'
import { articles, featuredArticle } from '../data/news'
import styles from './ArticlePage.module.css'

function ArticlePage() {
  const { slug } = useParams()

  // Find article from all articles including featured
  const allArticles = [
    {
      ...featuredArticle,
      body: [
        `Eagle Logistic Services reached a remarkable milestone in 2025 — twenty years of connecting Sri Lankan businesses to global markets. What began as a small freight forwarding operation in Colombo has grown into a full-service logistics powerhouse with a presence across Sri Lanka and a global reach spanning 240 cities through the PSA BDP strategic partnership.`,
        `The journey has been one of constant evolution. In the early years, the focus was purely on freight forwarding — helping Sri Lankan exporters and importers navigate the complexities of ocean and air cargo. But as client needs grew more sophisticated, so did Eagle Logistic's service offering.`,
        `The launch of the Customs & Consultancy division brought deep regulatory expertise in-house. The establishment of the Logistics BPO division gave clients a way to dramatically reduce their back-office costs. The creation of Logipharma opened up the specialised world of pharmaceutical cold-chain logistics. And the development of E-Visible brought digital supply chain visibility to clients who had previously managed their logistics through spreadsheets and phone calls.`,
        `The PSA BDP strategic partnership, forged in the mid-2010s, was perhaps the single most transformative development in the company's history. It gave Eagle Logistic clients access to a global network and digital tools that had previously been the preserve of multinational corporations.`,
        `As Eagle Logistic looks ahead to its next twenty years, the focus is on deeper integration of technology across all service lines, continued expansion of the supply chain community and further development of the Prime Business Solutions technology division.`,
        `"Twenty years ago, we had a simple mission: to be the most trusted logistics partner for Sri Lankan businesses," says Managing Director Asanga Weerackody. "That mission has not changed. What has changed is our capacity to fulfil it."`,
      ],
    },
    ...articles
  ]

  const article = allArticles.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h2>Article Not Found</h2>
        <p>The article you are looking for does not exist.</p>
        <Link to="/news" className={styles.backBtn}>← Back to News</Link>
      </div>
    )
  }

  // Related articles (same category, exclude current)
  const related = articles
    .filter(a => a.category === article.category && a.slug !== slug)
    .slice(0, 3)

  return (
    <main className={styles.page}>

      {/* Hero */}
      <div className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBreadcrumb}>
            <Link to="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <Link to="/news" className={styles.breadLink}>News & Insights</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadCurrent}>{article.category}</span>
          </div>
          <span className={styles.heroTag}>{article.category}</span>
          <h1 className={styles.heroTitle}>{article.title}</h1>
          <div className={styles.heroMeta}>
            <div className={styles.heroAuthor}>
              <div className={styles.heroAvatar}>
                {article.author.charAt(0)}
              </div>
              <span>{article.author}</span>
            </div>
            <span className={styles.heroDot} />
            <span>{article.date}</span>
            <span className={styles.heroDot} />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className={styles.layout}>
        <article className={styles.article}>

          {/* Excerpt */}
          <p className={styles.excerpt}>{article.excerpt}</p>

          {/* Body paragraphs */}
          <div className={styles.body}>
            {article.body?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className={styles.tags}>
            <span className={styles.tagLabel}>Topics:</span>
            <span className={styles.tag}>{article.category}</span>
            <span className={styles.tag}>Eagle Logistic</span>
            <span className={styles.tag}>Sri Lanka Logistics</span>
          </div>

          {/* Share */}
          <div className={styles.share}>
            <span className={styles.shareLabel}>Share this article:</span>
            <div className={styles.shareButtons}>
              <a href="#" className={styles.shareBtn}>
                <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a href="#" className={styles.shareBtn}>
                <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter / X
              </a>
              <a href="#" className={styles.shareBtn}>
                <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* Author card */}
          <div className={styles.authorCard}>
            <div className={styles.authorAvatarLg}>
              {article.author.charAt(0)}
            </div>
            <div className={styles.authorInfo}>
              <div className={styles.authorLabel}>Written by</div>
              <div className={styles.authorName}>{article.author}</div>
              <div className={styles.authorCompany}>Eagle Logistic Services</div>
            </div>
            <Link to="/contact" className={styles.contactAuthorBtn}>
              Get in Touch
            </Link>
          </div>

          {/* Back button */}
          <Link to="/news" className={styles.backLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              width={16} height={16}>
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to News & Insights
          </Link>
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>

          {/* CTA */}
          <div className={styles.sidebarCTA}>
            <div className={styles.ctaTitle}>Need Logistics Help?</div>
            <p className={styles.ctaDesc}>
              Talk to our team today and get expert advice on your
              supply chain challenges.
            </p>
            <Link to="/contact" className={styles.ctaBtn}>
              Contact Us
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div className={styles.related}>
              <div className={styles.relatedTitle}>Related Articles</div>
              {related.map(r => (
                <Link
                  key={r.id}
                  to={`/news/${r.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImg}>
                    <img src={r.image} alt={r.title} />
                  </div>
                  <div className={styles.relatedInfo}>
                    <div className={styles.relatedCategory}>{r.category}</div>
                    <div className={styles.relatedCardTitle}>{r.title}</div>
                    <div className={styles.relatedDate}>{r.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* All services */}
          <div className={styles.servicesBox}>
            <div className={styles.servicesBoxTitle}>Our Services</div>
            {[
              { label: 'Freight Forwarding',    href: '/services/freight-forwarding' },
              { label: 'Logistics BPO',         href: '/services/logistics-bpo' },
              { label: 'Customs & Consultancy', href: '/services/customs-consultancy' },
              { label: 'Specialized Logistics', href: '/services/specialized-logistics' },
              { label: 'BDP Partnership',       href: '/bdp-partnership' },
            ].map(svc => (
              <Link key={svc.label} to={svc.href} className={styles.svcLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={14} height={14}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                {svc.label}
              </Link>
            ))}
          </div>

        </aside>
      </div>
    </main>
  )
}

export default ArticlePage