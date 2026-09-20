
function Navigation() {

{/*
	function copyURL() {
		const URL = "https://www.needleinthehayfilm.com";
		navigator.clipboard.writeText(URL);
		alert("Website URL copied: " + URL);
	};

*/}
	return (
		<>
{/*CALL TO ACTION*/}
			<ul className="call_to_action">
				<li>
					<a
						title="home"
						href="/">
							<img 
								className="nav_logo"
								src="/assets/images/iiixi-logo-icon-2020-white-16x10.png"
								alt="home" /></a>
				</li>
				<li>
					<a
						title="seed&spark"
						className="button"
						href="https://seedandspark.com/fund/needle-in-the-hay?token=c0d2cac3031d07d83ccfde4abb6f78da050ad83b808c031bb538173e6b17f6f3#story">About 
					</a>
				</li>
				<li>
					<a
						title="youtube"
						className="button"
						href="https://youtube.com/playlist?list=PL60k06ybzlYtFEWA0kw4PN224uKqsoaiQ&si=gJqpkEcUyZDdI_35">Interviews
					</a>
				</li>
				<li>
					<a
						title="substack"
						className="button"
						href="https://needleinthehayfilm.substack.com">News
					</a>
				</li>
				<li>
					<a
						className="button"
						href="/posters">Posters
					</a>
				</li>
				<li>
					<a
						title="Google Drive"
						className="button"
						href="https://drive.google.com/drive/folders/1-URda43nARtCZElAu708-UzCl45Za4Xd?usp=drive_link">Press Kit
					</a>
				</li>

			</ul>
		</>
	)
}

export default Navigation;
