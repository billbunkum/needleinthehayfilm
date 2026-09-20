import { useState } from 'react'
import '../App.css'
import EmailForm from '../components/_email_form.jsx'
import Footer from '../components/_footer.jsx'
import Navigation from '../components/_navigation.jsx'
import Socials from '../components/_socials.jsx'
import Trailer from '../components/_trailer.jsx'
import Team from '../components/_team.jsx'
import Teaser from '../components/_teaser.jsx'

//const SOCIALS = import.meta.env.VITE_SOCIALS;
//const ASSETS = import.meta.env.VITE_ASSETS;

function Home() {

  return (
    <>
			<div className="main_container">
				<h1 id="top">Needle in the Hay</h1>
				<Socials />
				<h2>"Friendship in the shadow of depression."</h2>
				<Teaser />
				<Navigation />
				<h2>
					<a href="https://www.youtube.com/embed/7JZNx8hyYw8?si=yhlEfOndPedjvTf-"
						>Film is in festivals
					</a>
				</h2>
				<Trailer />
				<Team />		
				<EmailForm />
				<Footer />
			</div>
    </>
  )
}

export default Home;
