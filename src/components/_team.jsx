import Addy from './people/_addy.jsx'
import Ainsley from './people/_ainsley.jsx'
import Amelia from './people/_amelia.jsx'
import Clara from './people/_clara.jsx'
import Emma from './people/_emma.jsx'
import Diego from './people/_diego.jsx'
import Kelly from './people/_kelly.jsx'
import Ken from './people/_ken.jsx'
import Lucy from './people/_lucy.jsx'
import Mickey from './people/_mickey.jsx'
import Niki from './people/_niki.jsx'
import Oscar from './people/_oscar.jsx'
import Raiah from './people/_raiah.jsx'
import Sean from './people/_sean.jsx'
import Shanti from './people/_shanti.jsx'
import WilliamActor from './people/_william_actor.jsx'
import WilliamProducer from './people/_william_producer.jsx'

function Team() {
	return (
		<>
			<div className="team_section">

				<ul>
					<li><h1>Our Crew</h1></li>
					<WilliamProducer />
<hr />
  				<Amelia />
					<Ken />
<hr />
					<Lucy />
<hr />
          <Addy />
<hr />
		 			<Shanti />
<hr />
  				<Niki /> 
<hr />

  				<Raiah />
<hr />

					<Oscar />	
<hr />
					<Diego />
<hr />
  				<Emma /> 
  				<Clara />
  				<Ainsley />
{/*				<Tevin /> */}
  				<Sean />

					<li><h1>Our Cast</h1></li>
  				<Mickey />
<hr />
					<Kelly />
<hr />
					<WilliamActor />
				</ul>
			</div>
		</>
	)
}

export default Team;
