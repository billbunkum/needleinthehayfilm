import { useState } from 'react'
import './App.css'
import Navigation from './components/_navigation.jsx'
import Team from './components/_team.jsx'
import Teaser from './components/_teaser.jsx'

const SOCIALS = import.meta.env.VITE_SOCIALS;
const ASSETS = import.meta.env.VITE_ASSETS;

function App() {

  return (
    <>
      <h1>Needle in the Hay</h1>
			<h2>A short film teaser</h2>
			<Navigation />

			<div className="splash_section">
				<img
//				src="assets/nith-placeholder.png"
					src={`${ASSETS}nith-placeholder.png`}
					alt="nith image"
				/>
			</div>

			<Teaser />

			<Team />		
    </>
  )
}

export default App
