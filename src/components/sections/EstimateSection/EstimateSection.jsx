import { useState } from 'react'
import styles from './EstimateSection.module.css'

const initialForm = {
  phone: '', email: '', cityDeparture: '',
  deliveryCity: '', weight: '', length: '', width: '',
}

function EstimateSection() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (field) => (e) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!')
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left image */}
        <div className={styles.imgWrap}>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80"
            alt="Delivery workers"
          />
        </div>

        {/* Right form card */}
        <div className={styles.formCard}>
          <svg className={styles.wave} viewBox="0 0 500 300" fill="none">
            {[0,-20,-40,-60,-80,-100,20,40,60].map((offset, i) => (
              <path
                key={i}
                d={`M-50 ${200+offset} Q100 ${100+offset} 250 ${180+offset} Q400 ${260+offset} 550 ${150+offset}`}
                stroke="white" strokeWidth="2" fill="none"
              />
            ))}
          </svg>

          <div className={styles.formLabel}>What To Expect</div>
          <h2 className={styles.formTitle}>Get your free estimate!</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row2}>
              <input className={styles.input} type="tel"   placeholder="Phone Number"     value={form.phone}         onChange={handleChange('phone')} />
              <input className={styles.input} type="email" placeholder="Email Address"    value={form.email}         onChange={handleChange('email')} />
            </div>
            <div className={styles.row2}>
              <input className={styles.input} type="text"  placeholder="City Of Depature" value={form.cityDeparture} onChange={handleChange('cityDeparture')} />
              <input className={styles.input} type="text"  placeholder="Delivery city"    value={form.deliveryCity}  onChange={handleChange('deliveryCity')} />
            </div>
            <div className={styles.row3}>
              <input className={styles.input} type="text"  placeholder="Weight"           value={form.weight}        onChange={handleChange('weight')} />
              <input className={styles.input} type="text"  placeholder="Length"           value={form.length}        onChange={handleChange('length')} />
              <input className={styles.input} type="text"  placeholder="Width"            value={form.width}         onChange={handleChange('width')} />
            </div>
            <div>
              <button className={styles.submitBtn} type="submit">
                Submit Now
                <span className={styles.submitCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default EstimateSection