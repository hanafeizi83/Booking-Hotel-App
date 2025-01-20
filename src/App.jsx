import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './components/Home/Home'
import HotelsList from './components/HotelsHomeList/HotelsHomeList'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout/AppLayout'
import HotelsSearchList from './components/HotelsSearchList/HotelsSearchList'
import SingleHotel from './components/SingleHotel/SingleHotel'
import HotelLayout from './components/HotelLayout/HotelLayout'
import HotelsProvider from './context/HotelsProvider'

function App() {

  return (
    <>
      <HotelsProvider>
        <Toaster />
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/hotels' element={<HotelLayout />}>
              <Route index element={<HotelsSearchList />} />
              <Route path=':id' element={<SingleHotel />} />
            </Route>
          </Route>
        </Routes>
      </HotelsProvider>

    </>
  )
}

export default App
