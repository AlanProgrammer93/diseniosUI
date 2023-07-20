import React, { useState } from 'react'
import './RangeInputBasic.css'

const RangeInputBasic = () => {
    const [count, setCount] = useState(0)

    return (
        <div className='RangeInputBasic'>
            <div className='RangeInputBasic_container'>
                <span id='rangeValue'>{count}</span>
                <input
                    type='range'
                    name='count'
                    value={count}
                    min={0}
                    max={1000}
                    onChange={(e) => setCount(e.target.value)}
                    className='RangeInputBasic_range'
                />
            </div>
        </div>
    )
}

export default RangeInputBasic