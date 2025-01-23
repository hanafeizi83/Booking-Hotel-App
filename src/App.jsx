import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout/AppLayout'
import HotelsSearchList from './components/HotelsSearchList/HotelsSearchList'
import SingleHotel from './components/SingleHotel/SingleHotel'
import HotelLayout from './components/HotelLayout/HotelLayout'
import HotelsProvider from './context/HotelsProvider'
import BookmarkLayout from './components/BookmarkLayout/BookmarkLayout'
import BookmarksList from './components/BookmarksList/BookmarksList'
import BookmarkProvider from './context/BookmarkProvider'
import SingleBookmark from './components/SingleBookmark/SingleBookmark'

function App() {

  return (
    <>
      <BookmarkProvider>
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
                <Route index element={<BookmarksList />} />
                <Route path=':id' element={<SingleBookmark />} />
                <Route path='addBookmark' element={<div>Add Bookmark</div>} />
              </Route>
            </Route>
          </Routes>
        </HotelsProvider>
      </BookmarkProvider>
    </>
  )
}

export default App
