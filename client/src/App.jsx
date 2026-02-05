import React from 'react'
import SignInForm from './authPages/SignupForm'
import Navbar from './components/Navbar'

function App() {
  return (
   <>
<div className="w-full min-h-screen flex flex-col">
  <Navbar />

  <div className="flex-1 flex items-center justify-center">
    <SignInForm />
  </div>
</div>


  
   
   </>
  )
}

export default App
