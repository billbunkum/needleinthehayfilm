import { useState } from 'react'
import './App.css'
import Footer from './components/_footer.jsx'
import Navigation from './components/_navigation.jsx'
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
			<h3>Filming starts July 2025!</h3>
			<h3>Crowd Funding starts June 2025</h3>
			<Navigation />

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
{/*				<img
				src="assets/nith-placeholder.png"
					alt="nith image"
				/>
*/}
			</div>

			<Teaser />

			<Team />		
			
			<Footer />
		</div>
    </>
  )
}

export default App
