import React from "react";
import StarRating from "./starRating";

function App() {
  return (
          <StarRating 
          totalStars={10}
          style={{background: "lightblue", border: "2px solid black"}}
          onDoubleClick={e => alert("double click")}
          />
          );
}

export default App;
