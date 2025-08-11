import Addy from './people/_addy.jsx'
import Amelia from './people/_amelia.jsx'
import Emma from './people/_emma.jsx'
import Diego from './people/_diego.jsx'
import Kelly from './people/_kelly.jsx'
import Ken from './people/_ken.jsx'
import Lucy from './people/_lucy.jsx'
import Mickey from './people/_mickey.jsx'
import Oscar from './people/_oscar.jsx'
import WilliamActor from './people/_william_actor.jsx'
import WilliamProducer from './people/_william_producer.jsx'

function Team() {
	return (
		<>
			<div className="team_section">

				<ul>
					<li><h1>Our Crew</h1></li>

					<Lucy />
					<WilliamProducer />
{/*					<Amelia />*/}
					<Ken />
{/* 			<Shanti />
					<Niki />
					<Raiah />
*/}
{/*					<Oscar />*/}
					<Diego />
{/*					<Emma />
						<Clara />
						<Ainsley />
						<Tevin />
						<Sean />
*/}
					<li><h1>Our Cast</h1></li>
						<Mickey />
						<Kelly />
						<WilliamActor />

				</ul>
			</div>
		</>
	)
}

export default Team;
