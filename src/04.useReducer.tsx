import React, { Reducer, useReducer } from 'react'

/**
 * 
 * useReducer
 * useReducer的类型参数传入Reducer<数据类型, action的类型>，第一个参数是reducer,第二个参数是初始数据
 * 复杂的场景使用，以下为简单举例
 */

interface Action {
  type: 'add' | 'minus',
  num: number
}

interface Data {
  result: number
}

function reducer(state: Data, action: Action) {
  switch(action.type) {
    case 'add': 
      return {
        result: state.result + action.num
      }
    case 'minus': 
      return {
        result: state.result - action.num
      }
  }
  return state
}

function App() {
  const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0 })

  return (
    <div>
      <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
      <div onClick={() => dispatch({ type: 'minus', num: 1 })}>减</div>
      <div>{res.result}</div>
    </div>
  )
}

export default App;
