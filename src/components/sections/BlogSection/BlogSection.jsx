import { blogPosts } from '../../../data/blog'
import styles from './BlogSection.module.css'

function BlogCard({ post }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.tag}>{post.tag}</span>
        <span className={styles.meta}>{post.author} &nbsp;–&nbsp; {post.date}</span>
      </div>
      <div className={styles.cardImg}>
        <img src={post.image} alt={post.title} />
      </div>
      {/* <div className={styles.cardBody}>
        <div className={styles.cardTitle}>{post.title}</div>
        <a href={post.href} className={styles.readMore}>
          Read More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div> */}
    </div>
  )
}

function BlogSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className={styles.label}>Our Blog</div>
          <h2 className={styles.title}>Updated Blogs &amp; News</h2>
        </div>
        {/* <a href="#" className={styles.viewAllBtn}>
          View All Post
          <span className={styles.viewAllCircle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a> */}
      </div>

      <div className={styles.grid}>
        {blogPosts.map(post => <BlogCard key={post.id} post={post} />)}
      </div>
    </section>
  )
}

export default BlogSection