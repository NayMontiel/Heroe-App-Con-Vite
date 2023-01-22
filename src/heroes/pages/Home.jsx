import React from 'react';
import marvelDc from '../../../public/img/marvelDc.png'


export const Home = () => {
  
  return (

    <>
        
    <h1 className='text-center mt-5'>Heroes App</h1>

    <div>
      <img src={marvelDc} alt={marvelDc} className='w-100 h-75' />
    </div>
    </>
    
  )
}
