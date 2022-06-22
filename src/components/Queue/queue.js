import React from 'react'
import "../../App.css";
import images from "../../index"

const Queue = (props) => {

return  <div className='name_queue_type fade-in' key={props.queue.id}>
            <div className ='queue_image'>
            <img  alt={props.queue.tier} width="100" height="100" src={images[props.queue.tier]}></img>
            </div>
            <div className ='queue_description'>
            <p className='thicker'>{props.queue.queueType === "RANKED_SOLO_5x5" ? 'SOLO': 'FLEX'}</p>
            <p>{props.queue.tier} {props.queue.rank}</p>
            <p><span className = 'green_text'>{props.queue.wins}</span> - <span className = 'red_text'>{props.queue.losses}</span></p>
            </div>
    </div>
}
export default Queue;


// queue = [
// {
//     data: 1
// },
// {
//     data: 2
// }

// ]