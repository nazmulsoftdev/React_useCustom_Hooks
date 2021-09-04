import React from 'react'
import useCustomhok from '../hook/useCustomhok'

function LayoutTwo() {

    const screenSize = useCustomhok(580);

    return (
        <div className={screenSize ? 'Large': 'Small'}>
            <h3>Check the className in console</h3>
        </div>
    )
}

export default LayoutTwo
