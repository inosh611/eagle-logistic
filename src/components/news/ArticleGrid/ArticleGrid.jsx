import { useState } from "react";
import { articles, categories } from "../../../data/news";
import styles from "./ArticleGrid.module.css";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={article.image} alt={article.title} />
        <span className={styles.cardTag}>{article.category}</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.metaText}>{article.date}</span>
          <span className={styles.metaDot} />
          <span className={styles.metaText}>{article.readTime}</span>
        </div>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        <p className={styles.cardExcerpt}>{article.excerpt}</p>
        <div className={styles.cardFooter}>
          <div className={styles.author}>
            <div className={styles.authorAvatar}>
              {article.author.charAt(0)}
            </div>
            <span className={styles.authorName}>{article.author}</span>
          </div>
          <Link to={`/news/${article.slug}`} className={styles.readMore}>
            Read More
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={14}
              height={14}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ArticleGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section className={styles.section} id="articles">
      <div className={styles.header}>
        <div className={styles.label}>Latest Articles</div>
        <h2 className={styles.title}>Insights & Industry News</h2>
      </div>

      {/* Category filters */}
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filter} ${activeCategory === cat ? styles.filterActive : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>No articles in this category yet.</div>
        ) : (
          filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        )}
      </div>
    </section>
  );
}

export default ArticleGrid;
