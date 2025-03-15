import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/assets/nith-placeholder.png'
import './App.css'

function App() {

  return (
    <>
      <h1>Needle in the Hay</h1>
			<h2>A short film teaser</h2>

			<img
			src="assets/nith-placeholder.png"
			alt="nith image"
			/>

{/*CALL TO ACTION*/}
			<ul className="call_to_action">
				<li>
					<a 
					href="https://seedandspark.com/fund/needle-in-the-hay#story">Support Us
					</a>
				</li>
				<li>
					<a
					href="#">Share Us
					</a>
				</li>
				<li>
					<a
					href="#">Join Us
					</a>
				</li>
			</ul>
    </>
  )
}

export default App
