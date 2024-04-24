import React from 'react'
import NavbarComponent from './components/NavbarComponent'

function layout({children}) {
  return (
    <div className='w-full p-12 flex flex-col gap-5'>
        <NavbarComponent/>
        {children}
        </div>
  )
}

export default layout