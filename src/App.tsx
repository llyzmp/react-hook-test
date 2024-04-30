import React, { useState } from 'react'

// function App() {
//   let [num, setNum] = useState(0)
//   return (
//     <div onClick={() => setNum(num + 1)}>{num}</div>
//   )
// }


function App() {
  let [num, setNum] = useState(() => {
    const num1 = 1+ 2
    const num2 = 3 + 5
    return num1 + num2
  })
  return (
    <div onClick={() => setNum(num + 1)}>{num}</div>
  )
}

export default App;
