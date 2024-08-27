import React from 'react'

const Error = () => {
  return (
      <div className='flex flex-col items-center justify-center h-screen '>   
        <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl font-semibold mb-2'>404</h2>
        <div className='text-lg text-red-900'>Error: 404 page not found</div>
        </div>
      </div>
  )
}

export default Error
