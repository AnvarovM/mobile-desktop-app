import { useState, useEffect } from 'react';
import faker from 'faker'
import Story from './Story';

function Stories() {
  const [suggestion, setSaggestion] = useState([])


  useEffect(() => {
    const suggestion = [...Array(20 )].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSaggestion(suggestion)
  }, []);

  return <div  className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-auto scrollbar-thin scrollbar-thumb-black small:w-max w-screen">
    {suggestion.map(profile => (
        <div className=''>
          <Story key={profile.id} img={profile.avatar} username={profile.username} />
        </div>
    ))}
  </div>;
}

export default Stories;
