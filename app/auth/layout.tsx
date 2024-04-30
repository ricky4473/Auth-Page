import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-col h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      {children}
    </div>
  )
}

export default layout
