import React from 'react'
import './timer.css'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full flex-col gap-4 bg-gray-800 text-white'>
      <h2 className='text-6xl font-bold'>InkFlow</h2>
      <h3 className='text-4xl font-semibold'>Coming Soon <span className='timer'>⌛</span></h3>
    </div>
  )
}

export default App