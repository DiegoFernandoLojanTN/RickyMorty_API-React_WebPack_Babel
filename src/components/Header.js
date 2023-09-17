import React from 'react'

export default function Header({title}) {
  return (
    <header>
        <div className='container'>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <p className='text'>Este proyecto representa de manera visual a los protagonistas de la serie Rick y Morty.</p>
                <p className='text'>Desde la siguiente API: <a className='enlace' href='https://rickandmortyapi.com' target='_blank'>https://rickandmortyapi.com</a></p>
            </div>
        </div>
    </header>
  )
}
