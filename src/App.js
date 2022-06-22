import React, { useState, useEffect} from "react";
import axios from'axios'
import "./App.css";
import Player from "./components/Player/Player"
import Inputform from "./components/InputForm/InputForm"
import MatchList from "./components/MatchList/MatchList"



function App() {
  const [buttonClick, setButtonClicked] = useState("");
  const [searchText, setSearchText] = useState("");
  const [textValue, setTextValue] = useState("");
  const [playerData, setPlayerData] = useState({});
  const [nameLoading, isNameLoading] = useState(false);
  const [matchLoading, isMatchLoading] = useState(false);

  function setSearch (value){
    setSearchText(value)
    setTextValue(value)
  }

  function resetLoading ()
  {
    // setPlayerData({})
    isNameLoading(true)
    isMatchLoading(true)
    // setPlayerData({})
  }

  function setNameLoading ()
  {
    isNameLoading(false) 
  }
  function setMatchLoading ()
  {
    isMatchLoading(false)
  }

  function searchFoPlayer(value) {  
    //setup the correct API call
    console.log("lambda request made")
    var APICallString ="https://2d557s3e30.execute-api.us-east-2.amazonaws.com/test/" + searchText 
    // Handle the API call
    axios.get(APICallString).then(function(response) {
      //success
      setPlayerData(response.data)
      setButtonClicked('clicked')
    }).catch(function(error){
      //error
      console.log(error)
    })
  }
  const submitChange = (e) => {
    resetLoading()
    setSearch("")
    searchFoPlayer(searchText)
    console.log("searching")
  }

  const checkEnter = (e) => {
   
    if (e.keyCode === 13){
      submitChange()
    }
    console.log(e)
 
}


  return (
    <div>
      <h1>League Tracker</h1>
      <Inputform setSearch={setSearch} checkEnter={checkEnter} searchText = {textValue} searchFoPlayer={searchFoPlayer} value = {textValue}  setLoading={resetLoading} submitChange = {submitChange} />
      {buttonClick !== "" ?

          <div className="results">
            <Player playerData = {playerData} key ={playerData.id} loading={nameLoading} setLoading={setNameLoading} />
            <MatchList key = {playerData.accountId} playerData = {playerData} loading={matchLoading}  setLoading={setMatchLoading}/> 
           </div>
        :
        <></>
      }
    </div>
    
  );
}

export default App;