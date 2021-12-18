import React, {useState , useEffect} from 'react';
import faker from "faker"


function Suggestion() {
    const [suggestion, setSuggeston] = useState([]);

    useEffect(() => {
        const suggestion = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ))
        setSuggeston(suggestion);
    }, [])

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestion for You </h3>
                <button className="text-gray-600 cursor-pointer font-semibold">See all </button>
            </div>


            {
                suggestion.map(profile => (
                    <div key={profile.id} className="flex items-center justify-between mt-3">  
                        <img className="w-10 h-10 border border-red-600 p-[2px] cursor-pointer rounded-full " src={profile.avatar} alt="" />

                        <div className="flex-1 ml-4">
                            <h2  className="font-semibold text-sm ">{profile.username}</h2>
                            <h3 className="text-sm text-gray-400">{profile.company.name}</h3>
                        </div>
                        <button className="text-blue-600 font-bold text-sm">Follow</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestion
