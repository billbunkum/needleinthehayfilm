import { useState } from 'react'
import './App.css'
import Footer from './components/_footer.jsx'
import Navigation from './components/_navigation.jsx'
import Socials from './components/_socials.jsx'
import Team from './components/_team.jsx'
import Teaser from './components/_teaser.jsx'

//const SOCIALS = import.meta.env.VITE_SOCIALS;
//const ASSETS = import.meta.env.VITE_ASSETS;

function App() {

  return (
    <>
		<div className="main_container">
      <h1 id="top">Needle in the Hay</h1>
			<h2>A film about Addiction, Suicide, & Genius</h2>
			<h3>Filming wrapped July 28th, 2025!</h3>
			<h3>Crowd Funding was Successful!</h3>
			<Navigation />

			<Socials />

			<div className="splash_section">
				<iframe 
					className="trailer"
					src="https://www.youtube.com/embed/uBoDZep86gk?si=LblMA4OGxPXhaNM5" 
					title="YouTube video player" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					referrerpolicy="strict-origin-when-cross-origin" 
					allowfullscreen>
				</iframe>
			</div>

			<Teaser />

			<Team />		
			
			<Footer />
		</div>
    </>
  )
}

export default App
