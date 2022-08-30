import React from 'react'

const Controllers = (props) => {
    const handleBtnClick = (e) => {
        props[e.target.name]()
    }
    return (
        <div className="Controllers">
            <button
                 className='btn'
                id="minusBtn"
                onClick={handleBtnClick}
                name="handleMinusBtnClick"
            >
                -
            </button>
            <button
            className='btn'
                id="plusBtn"
                onClick={handleBtnClick}
                name="handlePlusBtnClick"
            >
                +
            </button>
        </div>
    )
}
export default Controllers