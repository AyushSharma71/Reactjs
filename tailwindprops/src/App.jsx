import { useState } from 'react'
import Card from '../components/Card'

function App() {
  const jobOpenings = [
    {
      "id": 1,
      "company": "Google",
      "logo": "https://i.pinimg.com/1200x/75/ad/25/75ad255ebbf47f949a79efa26e28cbbe.jpg",
      "posted": "5 days ago",
      "role": "Senior UI/UX Designer",
      "tags": ["Part-time", "Senior-level"],
      "salary": "$120/hr",
      "location": "San Francisco, CA"
    },
    {
      "id": 2,
      "company": "Amazon",
      "logo": "https://static.vecteezy.com/system/resources/previews/019/766/223/non_2x/amazon-logo-amazon-icon-transparent-free-png.png",
      "posted": "2 days ago",
      "role": "Frontend Developer",
      "tags": ["Full-time", "Mid-level"],
      "salary": "$95/hr",
      "location": "Seattle, WA"
    },
    {
      "id": 3,
      "company": "Microsoft",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      "posted": "1 week ago",
      "role": "Product Designer",
      "tags": ["Full-time", "Senior-level"],
      "salary": "$110/hr",
      "location": "Redmond, WA"
    },
    {
      "id": 4,
      "company": "Netflix",
      "logo": "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
      "posted": "3 days ago",
      "role": "UI Engineer",
      "tags": ["Contract", "Senior-level"],
      "salary": "$130/hr",
      "location": "Los Angeles, CA"
    },
    {
      "id": 5,
      "company": "Meta",
      "logo": "https://www.citypng.com/public/uploads/preview/facebook-meta-logo-icon-hd-png-701751694777703xqxtpvbu9q.png",
      "posted": "4 days ago",
      "role": "UX Researcher",
      "tags": ["Full-time", "Mid-level"],
      "salary": "$105/hr",
      "location": "Menlo Park, CA"
    },
    {
      "id": 6,
      "company": "Apple",
      "logo": "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      "posted": "6 days ago",
      "role": "Interaction Designer",
      "tags": ["Full-time", "Senior-level"],
      "salary": "$125/hr",
      "location": "Cupertino, CA"
    },
    {
      "id": 7,
      "company": "Spotify",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      "posted": "2 weeks ago",
      "role": "Product Designer",
      "tags": ["Part-time", "Junior-level"],
      "salary": "$80/hr",
      "location": "Stockholm, Sweden"
    },
    {
      "id": 8,
      "company": "Airbnb",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      "posted": "5 days ago",
      "role": "UX Designer",
      "tags": ["Contract", "Mid-level"],
      "salary": "$100/hr",
      "location": "San Francisco, CA"
    },
    {
      "id": 9,
      "company": "Uber",
      "logo": "https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png",
      "posted": "1 day ago",
      "role": "UI Developer",
      "tags": ["Full-time", "Mid-level"],
      "salary": "$98/hr",
      "location": "New York, NY"
    },
    {
      "id": 10,
      "company": "Adobe",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
      "posted": "3 days ago",
      "role": "Visual Designer",
      "tags": ["Full-time", "Senior-level"],
      "salary": "$115/hr",
      "location": "San Jose, CA"
    }
  ]

  return (
    <>
      <div className="parent">
        {jobOpenings.map(function (elem) {
          return <Card company={elem.company} logo={elem.logo} posted={elem.posted} role={elem.role} tags={elem.tags} salary={elem.salary} location={elem.location}
          />
        })}
      </div>
    </>
  )
}

export default App
