import { useState } from 'react'
import './App.css'
import Footer from './components/_footer.jsx'
import Navigation from './components/_navigation.jsx'
import Socials from './components/_socials.jsx'
import Trailer from './components/_trailer.jsx'
import Team from './components/_team.jsx'
import Teaser from './components/_teaser.jsx'

//const SOCIALS = import.meta.env.VITE_SOCIALS;
//const ASSETS = import.meta.env.VITE_ASSETS;

function App() {

  return (
    <>
		<div className="main_container">
      <h1 id="top">Needle in the Hay</h1>
			<Socials />
			<h2>A film about Addiction, Suicide, and Friendship</h2>
			<Teaser />
			<Navigation />
			<Trailer />
			<Team />		
			<Footer />
		</div>
    </>
  )
}

export default App
