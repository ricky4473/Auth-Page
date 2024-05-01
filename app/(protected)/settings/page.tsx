import {auth, signOut} from '@/auth'
import React from 'react'

const pages = async () => {
  const session =await auth()
  return (
    <div>
     {JSON.stringify(session)}
     <form action={async()=>{
      'use server'
      await signOut()
     }}>
      <button type='submit'>Sign out</button>
     </form>
    </div>
  )
}

export default pages
