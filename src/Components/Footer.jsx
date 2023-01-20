import React from 'react'

const Footer = () => {
  const today = new Date()
  return (
      <footer className='container-fluid p-5 mt-5 bg-dark'>
        <div className="text-center text-white">
          <h5>Team Members Allocatioin App {today.getFullYear()}</h5>
        </div>
      </footer>
        
   
  )
}

export default Footer
