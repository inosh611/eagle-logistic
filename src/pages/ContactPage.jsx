import ContactHero     from '../components/contact/ContactHero/ContactHero'
import ContactForm     from '../components/contact/ContactForm/ContactForm'
import OfficesMap      from '../components/contact/OfficesMap/OfficesMap'
import DepartmentList  from '../components/contact/DepartmentList/DepartmentList'
import ContactStats    from '../components/contact/ContactStats/ContactStats'

function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactStats />
      <ContactForm />
      <DepartmentList />
      <OfficesMap />
    </main>
  )
}

export default ContactPage