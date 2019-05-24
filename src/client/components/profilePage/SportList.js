import React from 'react'

const SportList = (props) => (
    <div className="list-container">
        <div>{props.title}</div>
        <input type="text" placeholder="1." name={props.sport[0]} />
        <input type="text" placeholder="2." name={props.sport[1]} />
        <input type="text" placeholder="3." name={props.sport[2]} />
        <input type="text" placeholder="4 " name={props.sport[3]} />
        <input type="text" placeholder="5." name={props.sport[4]} />
        <input type="text" placeholder="6." name={props.sport[5]} />
        <input type="text" placeholder="7." name={props.sport[6]} />
        <input type="text" placeholder="8." name={props.sport[7]} />
        <input type="text" placeholder="9." name={props.sport[8]} />
        <input type="text" placeholder="10." name={props.sport[9]} />
        <button>ENTER</button>
    </div>
)



export default SportList