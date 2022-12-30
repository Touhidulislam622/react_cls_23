import React, { useState } from 'react'

export default function Index2() {

    const [count , setCount ] = useState(1)
    const handleINC = () => {
        setCount(count + 1)
    }
 
    return (
    <div>
        <h1>count: {count} </h1>
        <button onClick={handleINC} disabled = {count === 10? true :false }>Increment</button>
    </div>
  )
}
