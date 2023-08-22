import React, { useState } from 'react'
import { data } from '../DataService'

const RxjsSecond = () => {
    const [value, setvalue] = useState(0)
    data.subscribe((val) => {
        console.log(val)
        setvalue(val)
    })
    const addData = () => {
        data.next(value - 1)
    }
    return (
        <>
            <div>{value}</div>
            <button onClick={addData}>Decrement</button>
        </>
    )
}

export default RxjsSecond