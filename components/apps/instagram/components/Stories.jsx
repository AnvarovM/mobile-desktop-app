import { useState, useEffect } from 'react';
import faker from 'faker'
import Story from './Story';

function Stories() {
  const [suggestion, setSaggestion] = useState([])


  useEffect(() => {
    const suggestion = [...Array(7)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSaggestion(suggestion)
  }, []);

  return <div  className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm">
    {suggestion.map(profile => (
        <div className='overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
          <Story key={profile.id} img={profile.avatar} username={profile.username} />
        </div>
    ))}
  </div>;
}

export default Stories;
