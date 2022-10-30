import { useContext } from 'react'
import Card from './shared/Card'

import JobListContext from '../context/JobListContext'

function JobList() {
  const {jobListing} = useContext(JobListContext)
  return (
    <div className='container'>
        {jobListing.map((item) => (
          <Card key={item.id} jobListing={item}/>
        ))}
      </div>
  )
}

export default JobList