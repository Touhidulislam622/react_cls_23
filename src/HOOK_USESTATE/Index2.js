import React , {useState } from 'react'

export default function Index2() {
   
    const [ count , setCount] = useState(1)
    const handleBTN = () => {
        setCount(count + 1)
    }
                          // using useState by functional component //
    return (
    <div>
        <h1>count : {count}</h1>
        <button onClick={handleBTN} disabled = { count === 10 ? true : false }>INCbutton</button>
    </div>
  )
}
