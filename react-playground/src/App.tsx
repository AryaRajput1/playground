import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='bg-black w-screen h-screen m-0 p-0 flex items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h3 className='text-white text-6xl font-bold'>Cursor Property</h3>
        <span className='bg-blue-500 text-white font-bold p-3 rounded-xl text-xl mt-3'>CSS</span>
        <div className='w-[60%]'>
          <div className='mt-4 p-4 items-center rounded-md text-white bg-gray-800 flex justify-between'>
            <div><span> cursor: </span><span className='text-blue-400 font-bold'>auto;</span></div> <div className='w-[40px] h-[40px] bg-blue-600 rounded-xl cursor-auto'></div>
          </div>
          <div className='mt-4 p-4 items-center rounded-md text-white bg-gray-800 flex justify-between'>
            <div><span> cursor: </span><span className='text-blue-400 font-bold'>pointer;</span></div> <div className='w-[40px] h-[40px] bg-blue-600 rounded-xl cursor-pointer'></div>
          </div>
          <div className='mt-4 p-4 items-center rounded-md text-white bg-gray-800 flex justify-between'>
            <div><span> cursor: </span><span className='text-blue-400 font-bold'>wait;</span></div> <div className='w-[40px] h-[40px] bg-blue-600 rounded-xl cursor-wait'></div>
          </div>
          <div className='mt-4 p-4 items-center rounded-md text-white bg-gray-800 flex justify-between'>
            <div><span> cursor: </span><span className='text-blue-400 font-bold'>text;</span></div> <div className='w-[40px] h-[40px] bg-blue-600 rounded-xl cursor-text'></div>
          </div>
          <div className='mt-4 p-4 items-center rounded-md text-white bg-gray-800 flex justify-between'>
            <div><span> cursor: </span><span className='text-blue-400 font-bold'>move;</span></div> <div className='w-[40px] h-[40px] bg-blue-600 rounded-xl cursor-move'></div>
          </div>
          <div className='mt-4 p-4 items-center rounded-md text-white bg-gray-800 flex justify-between'>
            <div><span> cursor: </span><span className='text-blue-400 font-bold'>help;</span></div> <div className='w-[40px] h-[40px] bg-blue-600 rounded-xl cursor-help'></div>
          </div>
          <div className='mt-4 p-4 items-center rounded-md text-white bg-gray-800 flex justify-between'>
            <div><span> cursor: </span><span className='text-blue-400 font-bold'>not-allowed;</span></div> <div className='w-[40px] h-[40px] bg-blue-600 rounded-xl cursor-not-allowed'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
