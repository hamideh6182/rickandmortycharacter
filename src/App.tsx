import React from "react";
import './App.css';
import CharacterCard, {Character} from "./CharacterCard";
import Gallery from "./Gallery";




function App() {
  const characters = require('./character.json')
  //ToDO: Aufruf Gallery
  return(
      <div className="coolGallery">
       <Gallery characters={characters}/>
       </div>
  );
}





export default App;
