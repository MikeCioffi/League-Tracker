import React, {useState, useEffect} from 'react';
import axios from 'axios'
import "../../App.css";
import Queue from  "../Queue/queue"
import LoadSpinner from "../LoadSpinner/LoadSpinner"


const Player = (props) => {
   const [playerDetails, setPlayerDetails] = useState ([]);

    //  {people.filter(person => person.age < 60).map(filteredPerson => (
    useEffect(() => {
           axios.get('https://uflxftnx2a.execute-api.us-east-2.amazonaws.com/prod/'+ props.playerData.id)
          .then(function(response){
           setPlayerDetails(response.data)
           props.setLoading()
          })
      }, [])
// console.log('loading in player ' + props.loading + 'and the length is ' + playerDetails.length)
let queueList = <LoadSpinner></LoadSpinner> 
      if(props.loading === false){
        if(playerDetails.length === 0){
            queueList = <div className='name_queue_type'><h3>no results found this player</h3></div>
        }

      if(playerDetails.length > 0){
        queueList = playerDetails.map((queue) => 
        
          // console.log(queue)
          <Queue queue= {queue} key={queue.queueType} /> 
      )
      
      } 
    }
      
      return  <div className="name_container">
      <h1 >Ranked</h1> 
      <div className="name">    
      {queueList}
      </div>
      </div>     
}
export default Player;
