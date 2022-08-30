import React from 'react'

const Reset = (props) => {
    return (
        <div className="Reset">
            <button
            className='btn-r'
                id="resetBtn"
                onClick={() => props.handleResteBtnClick()}
            >
                Reset
            </button>
        </div>
    )
}
export default Reset