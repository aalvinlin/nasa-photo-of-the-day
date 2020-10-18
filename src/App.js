import React, { useState, useEffect } from "react";

import axios from "axios";

import "./App.css";

function App() {

  const [pictureURL, setPictureURL] = useState(null);

  useEffect(() => {

    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then( response => {

        console.log("Picture found", response);

        setPictureURL(response);

      })
      .catch( error => {
        console.log("Error:", error);
      })

  }, [])

  return (
    <div className="App">
      <p>
        { pictureURL ? <img src={pictureURL} /> : "Loading..." }
      </p>
    </div>
  );
}

export default App;
