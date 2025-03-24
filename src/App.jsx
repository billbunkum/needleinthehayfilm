import { useState } from 'react'
import './App.css'
import Navigation from './components/_navigation.jsx'
import Team from './components/_team.jsx'
import Teaser from './components/_teaser.jsx'

const IMAGES = import.meta.env.VITE_IMAGES;
const ASSETS = import.meta.env.VITE_ASSETS;

function App() {

  return (
    <>
      <h1>Needle in the Hay</h1>
			<h2>A short film teaser</h2>
			<Navigation />

			<img
//				src="assets/nith-placeholder.png"
				src={`${ASSETS}nith-placeholder.png`}
				alt="nith image"
			/>

			<Teaser />

			<Team />		
    </>
  )
}

export default App
