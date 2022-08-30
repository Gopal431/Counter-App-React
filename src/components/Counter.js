import React from 'react'
import Controllers from './Controllers'
const Counter = (props) => {
    return (
        <div className="Counter">
            <h1>{props.count}</h1>
            <Controllers
                handleMinusBtnClick={props.handleMinusBtnClick}
                handlePlusBtnClick={props.handlePlusBtnClick}
            />
        </div>
    )
}
export default Counter
