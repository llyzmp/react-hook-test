import React, { useLayoutEffect, useState } from 'react'

/**
 * 
 * useLayoutEffect 
 * 大多数情况和useEffect一样
 * 
 * useEffect的effect函数会在操作dom之后异步执行
 * useLayoutEffect和useEffect区别是它的effect执行是同步的，在同一个任务里，浏览器会等effect逻辑执行完再渲染，可以解决页面闪动问题，但是会阻塞渲染
 * 
 */

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(123)
    }, 3000)
  })
  return data
}
// 常规写法
function App() {
  let [num, setNum] = useState(0)
  useLayoutEffect(() => {
    console.log('11111')
    // useLayoutEffect await, 需要单独定义函数
    async function fetchData() {
      try {
        const data = await queryData()
        setNum(data)
      } catch(err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])



  return (
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
  )
}

export default App;
