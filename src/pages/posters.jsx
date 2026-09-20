import { useState } from 'react'
import '../App.css'
import Navigation from '../components/_navigation.jsx'

function Posters() {
	return (
		<>

			<Navigation />

			<div className="poster-page">
				<div className="posters-container">
					<img
						alt="poster-1"
						src="/assets/images/posters/nith-poster-v2-noBleed-72dpi-27x40.jpg"	
					/><br />
					<img
						alt="poster-2"
						src="/assets/images/posters/nith-poster-web-3x4.jpg"
					/>
				</div>
			</div>
		</>
	)
}

export default Posters;
