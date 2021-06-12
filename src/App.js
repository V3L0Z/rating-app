import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Star from './Star'

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} class="App-logo" />
        <h1>Star Rating</h1>
        <div class="flex-container">
          {stars.map((star, index) => (
            <Star 
              key={index} 
              starId={index} 
              rating={hover || rating} 
              onMouseEnter={() => setHover(index)} 
              onMouseLeave={() => setHover(0)} 
              onClick={() => setRating(index)}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
