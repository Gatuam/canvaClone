'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const GetDesign = () => {
    const {data: session } = useSession()
    if(!session){
        console.log("No session found");
        return;
    }
    
  return (
    <div>
      
    </div>
  )
}

export default GetDesign
