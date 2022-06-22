import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import IRON from "./ranked-emblems/Emblem_Iron.png";
import BRONZE from "./ranked-emblems/Emblem_Bronze.png";
import SILVER from "./ranked-emblems/Emblem_Silver.png";
import GOLD from "./ranked-emblems/Emblem_Gold.png";
import PLATINUM from "./ranked-emblems/Emblem_Platinum.png";
import DIAMOND from "./ranked-emblems/Emblem_Diamond.png";
import GRANDMASTER from "./ranked-emblems/Emblem_Grandmaster.png";
import CHALLENGER from "./ranked-emblems/Emblem_Challenger.png";

const images = {
  IRON,
  BRONZE,
  SILVER,
  GOLD,
  PLATINUM,
  DIAMOND,
  GRANDMASTER,
  CHALLENGER
  
}
export default images;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

