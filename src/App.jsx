import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Posters from './pages/posters'
//const SOCIALS = import.meta.env.VITE_SOCIALS;
//const ASSETS = import.meta.env.VITE_ASSETS;

function App() {

  return (
    <>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/posters" element={<Posters />} />
				</Routes>
			</BrowserRouter>

    </>
  )
}

export default App
