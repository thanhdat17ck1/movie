import React from 'react'
import { Routes , Route } from 'react-router-dom'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Contact from './page/Home/Contact'
import Home from './page/Home/Home'

export default function Router() {
  return (
    <Routes>
            <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact />} />
            <Route path="movie">
                    <Route path=":id" element={<MovieDetail/>}/>
            </Route>
        </Routes>
  )
}
