import JobBoard from '@/components/careers/JobBoard'
import CareersCta from '@/components/careers/CareersCta'

/* Role data lives in lib/careers.ts. */
export default function CareersPage() {
  return (
    <>
      <JobBoard />
      <CareersCta />
    </>
  )
}
