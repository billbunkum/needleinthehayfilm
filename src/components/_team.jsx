import Addy from './people/_addy.jsx'
import Amelia from './people/_amelia.jsx'
import Emma from './people/_emma.jsx'
import Diego from './people/_diego.jsx'
import Kelly from './people/_kelly.jsx'
import Ken from './people/_ken.jsx'
import Lucy from './people/_lucy.jsx'
import Mickey from './people/_mickey.jsx'
import Oscar from './people/_oscar.jsx'
import Shanti from './people/_shanti.jsx'
import WilliamActor from './people/_william_actor.jsx'
import WilliamProducer from './people/_william_producer.jsx'

function Team() {
	return (
		<>
			<div className="team_section">

				<ul>
					<li><h1>Our Crew</h1></li>
					<Lucy />
<hr />
					<WilliamProducer />
<hr />
{/*				<Amelia />	*/}
					<Ken />
<hr />
		 			<Shanti />
<hr />
{/*				<Niki /> */}
{/*				<Raiah /> */}
					<Oscar />	
<hr />
					<Diego />
<hr />
{/*				<Emma /> */}
{/*				<Clara /> */}
{/*				<Ainsley /> */}
{/*				<Tevin /> */}
{/*				<Sean /> */}
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
