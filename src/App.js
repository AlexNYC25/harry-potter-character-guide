import logo from './logo.svg';
import './App.css';

import React from 'react'
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";

import Nav from './components/nav';

import Landing from './pages/landing.js';

function App() {

	let [characterData, setCharacterData] = React.useState(null);

	React.useEffect(() => {
		fetch("http://hp-api.herokuapp.com/api/characters/students")
			.then(res => res.json())
			.then(data => {
				setCharacterData(data);
				console.log(data.length);
			});

	}, [])

	let getCharacters = (numberOfCharacters = 12) => {

		let characters = []

		if(!characterData){
			return []
		}

		for(let i =0; i < numberOfCharacters; i++){
			characters.push(characterData[i]);
		}

		return characters;
	}

	let getCharacter = (nameOfCharacter) => {
		let character = characterData.find(character => character.name === nameOfCharacter);
		return character;
	}


	return (
		<div className="App" >
			<Nav />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
