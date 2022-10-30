import { createContext, useState, useEffect } from "react"


const JobListContext = createContext()

export const JobListProvider = ({children}) => {
  const [jobListing, setJobListing] = useState([
  //   {
  //   "id": 1,
  //   "company": "Photosnap",
  //   logo,
  //   "new": true,
  //   "featured": true,
  //   "position": "Senior Frontend Developer",
  //   "role": "Frontend",
  //   "level": "Senior",
  //   "postedAt": "1d ago",
  //   "contract": "Full Time",
  //   "location": "USA Only",
  //   "languages": ["HTML", "CSS", "JavaScript"],
  //   "tools": []
  // },
  ])

// TODO: Create isLoading state

// TODO: Fetch data
useEffect(() => {
  fetchJobList()
}, [])

const fetchJobList = async () => {
  const response = await fetch('https://gist.githubusercontent.com/Eric-JT/143f3ad7e09a23cb91ac4776433502cf/raw/b10776e41a586084f2611acb4bd335490eca5c16/data.json')
  const data = await response.json()
  setJobListing(data)
}

  return <JobListContext.Provider value={{
    jobListing,
  }}>
    {children}
  </JobListContext.Provider>

}

export default JobListContext