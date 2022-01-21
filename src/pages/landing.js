
import React from 'react';

export default function Landing(props){

    let [characterData, setCharacterData] = React.useState(null);
    
    React.useEffect(() => {
		fetch("http://hp-api.herokuapp.com/api/characters/students")
			.then(res => res.json())
			.then(data => {
				setCharacterData(data.filter(character => character.image !== ""));
			});
            
	}, [])

    return (
        <div className='max-h-max min-h-screen bg-amber-500 ' >

            <div id="intro-text" className='py-10'>
                <h1 className="text-5xl font-bold">
                    Welcome to Hogwarts!
                </h1>   
            </div>

            <div id="intro-paragraph" className='flex flex-row content-center'>
                <div className='basis-5/12 content-center p-4'>
                    <img src='https://images.ctfassets.net/usf1vwtuqyxm/3QQaEkThAnIAiXveGhJYD9/f79a571dbe9fd456d65e783040601fdc/hogwarts-castle-.jpg' alt="Hogwarts" className="mx-auto rounded-lg object-cover w-max" />
                </div>
                <div className='basis-7/12 flex'>
                    <p className='m-auto'>
                        Hogwarts is a magical school for young people. One of the best magical schools in the world, Hogwarts is located in the United Kingdom. Established in the year of 1691, Hogwarts is the oldest school in the world.
                        In our long history we have guided many students to be the best wizards in the world. In honor of our school's founders our students are divided into four houses: Gryffindor, Hufflepuff, Ravenclaw and Slytherin.
                        All students are divided into one of the four houses based on their personality traits ultimately determining their house.
                    </p>
                </div>
            </div>

            <div id="intro-history" className='flex flex-row-reverse content-center'>
                <div className='basis-5/12 content-center p-4'>
                    <img src='https://images.ctfassets.net/usf1vwtuqyxm/3QQaEkThAnIAiXveGhJYD9/f79a571dbe9fd456d65e783040601fdc/hogwarts-castle-.jpg' alt="Hogwarts" className="mx-auto rounded-lg object-cover w-max" />
                </div>

                <div className='basis-7/12 flex'>
                    <p className='m-auto'>
                        In more recent times, Hogwarts has been a focal point for many historical events. During the time of the first wizarding war, our students were among the first to rise up 
                        against he-who-must-not-be-named. We hosted the first tri-wizard tournment from the last century. And although our school was damaged during he-who-must-not-be-named's attack
                        during the second wizarding war, we have continued to be a magical school, making imporvements over the years to both our ciriculum and our campus.
                    </p>
                </div>
            </div>


            <div>
                <h2 className='text-4xl'>Our Honored Alumni</h2>
            </div>
            <div id="alumni" className='flex flex-row content-center'>
                
                <div id="honored-alumni" className='grid grid-cols-4'>
                    {characterData?.map(student => {
                        return (
                            <div className='grid-item p-5 lg:p-20'>
                                <img src={student.image} alt={student.name} className='object-fill w-40 h-40' />
                            </div>
                        )
                    }).slice(0, 8)}
                </div>
            </div>

        </div>
    );



}