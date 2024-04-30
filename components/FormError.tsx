import {ExclamationTriangleIcon} from '@radix-ui/react-icons' 

interface FormErrorProps{
    message?:string


}

import React from 'react'

const FormError = ({message}:FormErrorProps) => {
    if(!message) return null
  return (
    <div className='flex items-center gap-x-2 text-sm text-destructive bg-destructive/15 p-3 rounded-md'>
        <ExclamationTriangleIcon className='size-4'/>
        <p>{message}</p>
      
    </div>
  )
}

export default FormError
