import React from 'react'
import CountDown from './components/CountDown'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full flex-col gap-4 bg-gray-800 text-white'>
      <h2 className='text-6xl font-bold'>InkFlow</h2>
      <CountDown />
    </div>
  )
}

export default App