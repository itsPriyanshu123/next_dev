import Navbar from '@/components/ui/navigation/navbar'
import React, { ReactNode } from 'react'

const Rootlayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      
        <Navbar/>
        {children}
    </main>
  )
}

export default Rootlayout