import { useState } from 'react'
import './App.css'
import Nav from './Components/nav'
import Cards from './Components/cards'
import Searchbar from './Components/searchbar'

const App = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(prev => !prev);
  }

  const jobs = [
    {
      company_logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      company_name: 'Amazon',
      time: '5 days ago',
      position: 'Senior UI/UX Designer',
      job_tag1: 'Part-time',
      job_tag2: 'Senior level',
      wage: '$120/hr',
      location: 'San Francisco, USA',
    },
    {
      company_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPLzioKr8pPzSaDsM2WwODrNxEqGP0B-K_Q&s',
      company_name: 'Google', 
      time: '2 days ago',
      position: 'Frontend Developer',
      job_tag1: 'Full-time',
      job_tag2: 'Mid level',
      wage: '$100/hr',
      location: 'Bangalore, India',
    },
    {
      company_logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      company_name: 'Microsoft',
      time: '1 day ago',
      position: 'Backend Engineer',
      job_tag1: 'Full-time',
      job_tag2: 'Entry level',
      wage: '$90/hr',
      location: 'Hyderabad, India',
    },
    {
      company_logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      company_name: 'Netflix',
      time: '3 days ago',
      position: 'Product Designer',
      job_tag1: 'Full-time',
      job_tag2: 'Senior level',
      wage: '$130/hr',
      location: 'Los Angeles, USA',
    },
    {
      company_logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
      company_name: 'Meta',
      time: '4 days ago',
      position: 'React Developer',
      job_tag1: 'Contract',
      job_tag2: 'Mid level',
      wage: '$110/hr',
      location: 'New York, USA',
    },
    {
      company_logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      company_name: 'Apple',
      time: '6 days ago',
      position: 'iOS Developer',
      job_tag1: 'Full-time',
      job_tag2: 'Senior level',
      wage: '$140/hr',
      location: 'Cupertino, USA',
    },
    {
      company_logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
      company_name: 'Tesla',
      time: '2 days ago',
      position: 'Software Engineer',
      job_tag1: 'Full-time',
      job_tag2: 'Mid level',
      wage: '$115/hr',
      location: 'Austin, USA',
    },
    {
      company_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr54hReWeo6iwlzKk5x7ECcW16bhAjRIRc_Q&s',
      company_name: 'Adobe',
      time: '1 day ago',
      position: 'UI Designer',
      job_tag1: 'Part-time',
      job_tag2: 'Entry level',
      wage: '$85/hr',
      location: 'San Jose, USA',
    },
    {
      company_logo: 'https://m.media-amazon.com/images/I/51rttY7a+9L.png',
      company_name: 'Spotify',
      time: '3 days ago',
      position: 'Web Developer',
      job_tag1: 'Contract',
      job_tag2: 'Mid level',
      wage: '$105/hr',
      location: 'Stockholm, Sweden',
    },
    {
      company_logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
      company_name: 'Uber',
      time: '5 days ago',
      position: 'Full Stack Developer',
      job_tag1: 'Full-time',
      job_tag2: 'Senior level',
      wage: '$125/hr',
      location: 'San Francisco, USA',
    }
  ];

  return (
    <div className="app-container">
      <Nav onSearchClick={toggleSearch} />
      {showSearch && <Searchbar />}
      <main className="grid">
        {jobs.map((job, index) => (
          <Cards key={index} {...job} />
        ))}
      </main>
    </div>
  )
}

export default App;