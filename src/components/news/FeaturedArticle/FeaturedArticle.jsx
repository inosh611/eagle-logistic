import { featuredArticle } from "../../../data/news";
import styles from "./FeaturedArticle.module.css";
import { Link } from 'react-router-dom'

function FeaturedArticle() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>Featured Story</div>
      <div className={styles.card}>
        <div className={styles.imgWrap}>
          <img src={featuredArticle.image} alt={featuredArticle.title} />
          <div className={styles.imgOverlay} />
          <span className={styles.categoryTag}>{featuredArticle.category}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.tag}>{featuredArticle.tag}</span>
            <span className={styles.metaDot} />
            <span className={styles.metaText}>{featuredArticle.date}</span>
            <span className={styles.metaDot} />
            <span className={styles.metaText}>{featuredArticle.readTime}</span>
          </div>
          <h2 className={styles.title}>{featuredArticle.title}</h2>
          <p className={styles.excerpt}>{featuredArticle.excerpt}</p>
          <div className={styles.footer}>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>
                {featuredArticle.author.charAt(0)}
              </div>
              <span className={styles.authorName}>
                {featuredArticle.author}
              </span>
            </div>
            <Link
              to={`/news/${featuredArticle.slug}`}
              className={styles.readBtn}
            >
              Read Full Story
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width={16}
                height={16}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticle;
