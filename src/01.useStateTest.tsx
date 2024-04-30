import React, { useState } from 'react'

/**
 * 
 * useState 状态变化的数据
 * 组件内的状态是useState创建的，整个应用还可以加个全局状态管理的库来管理state
 */


// function App() {
//   let [num, setNum] = useState(0)
//   return (
//     <div onClick={() => setNum(num + 1)}>{num}</div>
//   )
// }

// 初始状态通过复杂计算得到的，可以传个函数计算初始值
// 这个函数只能写一些同步计算逻辑，不支持异步
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
