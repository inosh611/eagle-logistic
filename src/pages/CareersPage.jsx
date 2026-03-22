import CareersHero       from '../components/careers/CareersHero/CareersHero'
import WhyJoinUs         from '../components/careers/WhyJoinUs/WhyJoinUs'
import JobListings       from '../components/careers/JobListings/JobListings'
import InternshipProgram from '../components/careers/InternshipProgram/InternshipProgram'
import ApplicationForm   from '../components/careers/ApplicationForm/ApplicationForm'

function CareersPage() {
  return (
    <main>
      <CareersHero />
      <WhyJoinUs />
      <JobListings />
      <InternshipProgram />
      <ApplicationForm />
    </main>
  )
}

export default CareersPage