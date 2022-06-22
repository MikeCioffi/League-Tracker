import React, {useState, useEffect} from "react";


import Match from "./Match"
import LoadSpinner from "../LoadSpinner/LoadSpinner"
import Chart from "../Chart/Chart"

import axios from 'axios'
import "../../App.css";


const  MatchList = (props) => {
    const puuid = props.playerData.puuid
    const [winTotals, setWinTotals] = useState([]); 
    const [chartData, setChartData] = useState({});
    const [matchData, setMatchData] = useState([]);
    const [matchList, setMatchList] = useState([]);
   

    function countTrue(arr) {
      return arr.filter(w => w === true).length;
    }
    function countFalse(arr) {
      return arr.filter(w => w === false).length;
    }
    useEffect(() => {
        console.log('updating chart data to ' + winTotals)
        setChartData({
          labels: ["win", "loss"],
          datasets: [
            {
              label: "Win Loss",
              data: [countTrue(winTotals),countFalse(winTotals)],
              backgroundColor: [
                "#CCF6C8",
                "#F9C0C0",
              ], 
              borderColor: [
                "#CCF6C8",
                "#F9C0C0",
              ]
              
            
            }]
        })
    }, [winTotals]);
    console.log('chartData = '+ JSON.stringify(chartData))
    useEffect(() => {
      setWinTotals([])
      //first get the list of matches when a new player is searched
        const fetchMatchList = async () =>{
            const data = await axios.get("https://x7hxa5dm5c.execute-api.us-east-2.amazonaws.com/MatchV5-PUUID/" + puuid)
            setMatchList(data.data)
        }
        fetchMatchList()

      },[props.playerData])

      // then get the data from each one and store it in matchData as an array
      useEffect(() => {
        const exec = async () => {
          const testDetails = await Promise.all(matchList.map(id => {
            return axios.get('https://w7jte3tx8k.execute-api.us-east-2.amazonaws.com/MatchV5-Details/'+id) 
          }))
          
          setMatchData(testDetails.map(({data}) => data.info));
          
          props.setLoading()

        }
        exec();
      }, [matchList])
      const matches = <ul className='matchResults_container' >
      {props.loading ? <LoadSpinner></LoadSpinner> : <></>}
      {matchData.length === 0 && <LoadSpinner></LoadSpinner>}
      {matchData.length > 0 && matchData.map((outerElement) =>
      <div  key={matchList.id}>
      {outerElement.participants.map((participant) => {
      if(participant.summonerName === props.playerData.name) {
          if(winTotals.length === 0){
            setWinTotals( prevState  => [...prevState, participant.win])
            console.log('updating wins to ' + participant.win)
          }
          return <Match key={outerElement.gameId} participant = {participant} outerElement = {outerElement} />                 
                     }})} </div>)}
    </ul>
      
return <div className = 'flex' >
        <div className="matchResults">
          <h1>Match List</h1>
          {matches}
        </div>
        <div className="chartResults">
        <h1> Summary Data</h1>
        {winTotals && winTotals.length? <Chart chartData = {chartData} winTotals = {winTotals} /> : <></>}
        </div>
    </div>

              }
 
export default MatchList; 