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
import BookmarkLayout from './components/BookmarkLayout/BookmarkLayout'

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
            <Route path='/bookmarks' element={<BookmarkLayout />}>
              <Route index element={<div>Bookmarks</div>} />
              <Route path=':id' element={<div>single Bookmark</div>} />
              <Route path='addBookmark' element={<div>Add Bookmark</div>} />
            </Route>
          </Route>
        </Routes>
      </HotelsProvider>

    </>
  )
}

export default App
