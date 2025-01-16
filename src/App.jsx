import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './components/Home/Home'
import HotelsList from './components/HotelsList/HotelsList'

function App() {

  return (
    <>
      <Toaster />
      <Home />
      <HotelsList />
    </>
  )
}

export default App
