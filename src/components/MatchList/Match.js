import React, {useState, useEffect} from "react";
import dateConverter from "../../components/Utilities/dateConverter"
import "./Match.css";


const Match = (props) => {
    // const [itemImageList, updateImageList] = useState({});



    const itemList =  [props.participant.item0,props.participant.item1,props.participant.item2, props.participant.item3,props.participant.item4,props.participant.item5]

    const itemImageList = itemList.map(image => {
        if(image != 0){
            return <img className='item_image' alt={props.participant.item0} src={'http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/'+image+'.png'} />

        }
        else if(image === 0){
           return <div className='item_image_fallback'/>
        }
 })    


    const currentDate = new Date();
        return (<div  >
            <li  className= 'match_detail_container fade-in' > 
            <div className='match_detail_left'>
            <p>{dateConverter( props.outerElement.gameCreation,currentDate)} days ago</p>
            {/* {props.outerElement.gameMode} */}

            <img alt = {props.participant.championName} className = 'champion_image' src={'http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/' + (props.participant.championName) + '.png'}></img>
            {props.participant.championName}
            </div>
            <div className='match_detail_right'>
                <div className='flex_column'>
                    <div className='match_detail_kda'>
                        <p className='green_text'>{props.participant.kills}</p>   
                        <p>/</p>
                        <p className='red_text'> {props.participant.deaths}</p> 
                        <p>/</p>
                        <p> {props.participant.assists}</p> 
                        <div className="break"></div>
                      <p>KDA:  {Math.round(props.participant.challenges.kda * 100 )/100}</p> 
                    </div>
                    <div className='match_detail_items' >
                        <div className='match_detail_items_container'>{itemImageList}</div>
                    </div>
                    </div>

               
               </div>
               <div className= {props.participant.win? 'winlossflag green' : 'winlossflag red'}>
                            <p >{props.participant.win? 'WIN' : 'LOSS'}</p>
                            </div>
               </li>
        
        </div>
            
            )}
 

   export default Match; 