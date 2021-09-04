import React from 'react'
import useCustomhok from '../hook/useCustomhok'


function LayoutOne() {

    const screenSize = useCustomhok(580);

    return (
        <div>
            <h3>You are using {screenSize ? 'Large' : 'Small'} device screen</h3>
        </div>
    )
}

export default LayoutOne
