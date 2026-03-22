import { useState } from 'react'
import styles from './ApplicationForm.module.css'

const departments = [
  'Freight Forwarding',
  'Logistics BPO',
  'Customs & Consultancy',
  'Sales & Marketing',
  'Prime Business Solutions',
  'Operations',
  'Internship Program',
]

const positionTypes = ['Full Time', 'Part Time', 'Internship']

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  department: '',
  positionType: '',
  position: '',
  message: '',
  resume: null,
}

function ApplicationForm() {
  const [form, setForm] = useState(initialForm)
  const [fileName, setFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (file) {
      setForm(prev => ({ ...prev, resume: file }))
      setFileName(file.name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Connect to your backend here
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className={styles.section} id="apply">
        <div className={styles.successWrap}>
          <div className={styles.successIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              width={32} height={32}>
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 className={styles.successTitle}>Application Submitted!</h2>
          <p className={styles.successDesc}>
            Thank you for your interest in Eagle Logistic. Our HR team will
            review your application and get back to you within 5 business days.
          </p>
          <button
            className={styles.successBtn}
            onClick={() => setSubmitted(false)}
          >
            Submit Another Application
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section} id="apply">
      <div className={styles.inner}>

        {/* Left info */}
        <div className={styles.info}>
          <div className={styles.label}>Apply Now</div>
          <h2 className={styles.title}>Start Your Application</h2>
          <p className={styles.desc}>
            Fill in the form with your details and upload your CV.
            Our HR team personally reviews every application.
          </p>

          <div className={styles.contactBox}>
            <div className={styles.contactBoxTitle}>HR Contact</div>
            <div className={styles.contactBoxItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                width={16} height={16}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              careers@eaglelogistic.lk
            </div>
            <div className={styles.contactBoxItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                width={16} height={16}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
              </svg>
              +94 11 XXX XXXX
            </div>
            <div className={styles.contactNote}>
              For internship enquiries, contact<br />
              <strong>Sayuri Pramudika</strong> directly at the email above.
            </div>
          </div>
        </div>

        {/* Right form */}
        <form className={styles.form} onSubmit={handleSubmit}>

          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Full Name *</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Your full name"
                value={form.fullName}
                onChange={handleChange('fullName')}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Email Address *</label>
              <input
                className={styles.input}
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange('email')}
                required
              />
            </div>
          </div>

          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Phone Number *</label>
              <input
                className={styles.input}
                type="tel"
                placeholder="+94 XX XXX XXXX"
                value={form.phone}
                onChange={handleChange('phone')}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Position Type *</label>
              <select
                className={styles.input}
                value={form.positionType}
                onChange={handleChange('positionType')}
                required
              >
                <option value="">Select type...</option>
                {positionTypes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Department *</label>
              <select
                className={styles.input}
                value={form.department}
                onChange={handleChange('department')}
                required
              >
                <option value="">Select department...</option>
                {departments.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Position Applied For</label>
              <input
                className={styles.input}
                type="text"
                placeholder="e.g. Freight Operations Associate"
                value={form.position}
                onChange={handleChange('position')}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Cover Message</label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Tell us about yourself and why you want to join Eagle Logistic..."
              value={form.message}
              onChange={handleChange('message')}
              rows={4}
            />
          </div>

          {/* File upload */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Upload CV / Resume *</label>
            <label className={styles.fileUpload}>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
                className={styles.fileInput}
                required
              />
              <div className={styles.fileBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={20} height={20}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span className={styles.fileText}>
                  {fileName || 'Click to upload PDF, DOC or DOCX'}
                </span>
                {fileName && <span className={styles.fileCheck}>✓</span>}
              </div>
            </label>
            <div className={styles.fileHint}>Maximum file size: 5MB</div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit Application
            <span className={styles.submitCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </button>

        </form>
      </div>
    </section>
  )
}

export default ApplicationForm