import React, { Component, useEffect } from 'react'
import '../App.css'
import './Form.css'
import  { Button } from './Button';

/*import Map from '../Map';*/


export default function Form() {
  const [description, setDescription] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const genres = ["All Genres", "Adventure", "Fighting", "RPG", "Town and City", "Horror", "Building", "FPS", "Military", 
                "Naval", "Sports", "Comedy", "Sci-Fi"]

  const handleSubmit = (event) => {
    console.log(`
      Genre: ${genre}
      Description: ${description}
    `);
    
    event.preventDefault();
  }


  return (
    <div className = 'form-container' id="particles-js"> 
      
      <form onSubmit={handleSubmit}>
        <h1>Tell Us About<br/>Your Game</h1>
  
        <label>
            Genre
            <select
            name="genre"
            value={genre}
            onChange={e => setGenre(e.target.value)}
            required>
            {genres.map(genre => (
                <option key={genre}>{genre}</option>
            ))}
            </select>
        </label>
      
    
      
        <label>
            Description
            <input
            name="description"
            type="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required />
        </label>
    


        <Button link="/loading-screen">Submit</Button>

      </form>
    </div>
  );
}
