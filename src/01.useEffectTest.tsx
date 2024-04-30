import React, { useEffect, useState } from 'react'

/**
 * 
 * useEffect 副作用函数
 * 第二个参数传空数组，这个数组叫依赖数组，react根据它有没有来决定是否执行effect函数，如果没传，每次都执行
 * 传了[],由于[]没有变化，所以只执行一次
 * 
 */

// async function queryData() {
//   const data = await new Promise<number>((resolve) => {
//     setTimeout(() => {
//       resolve(123)
//     }, 3000)
//   })
//   return data
// }
// 常规写法
// function App() {
//   let [num, setNum] = useState(0)
//   useEffect(() => {
//     console.log('11111')
//     // useEffect函数不支持async await, 需要单独定义函数
//     async function fetchData() {
//       try {
//         const data = await queryData()
//         setNum(data)
//       } catch(err) {
//         console.log(err);
//       }
//     }
//     fetchData()
//   }, [])


// 如果写了个定时器，依赖变化之后，再次执行useEffect，怎么清理上个定时器
function App() {
  let [num, setNum] = useState(0)
  useEffect(() => {
    console.log('effect')
    const timer = setInterval(() => {
      console.log(num);
    }, 1000)
    
    return () => {
      console.log('clean timer');
      clearInterval(timer)
    } 
  }, [num])



  return (
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
  )
}

export default App;
