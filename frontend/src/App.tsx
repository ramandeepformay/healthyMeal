
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signin" element={<Signin/>}/>
          <Route path="/meals" element={<Meals />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
