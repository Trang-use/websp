
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/layouts/header'
import Footer from './components/layouts/footer'

function App() {

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
