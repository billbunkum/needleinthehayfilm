
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
						className="button"
						href="https://seedandspark.com/fund/needle-in-the-hay?token=c0d2cac3031d07d83ccfde4abb6f78da050ad83b808c031bb538173e6b17f6f3#story">About 
					</a>
				</li>
				<li>
					<a
						className="button"
						href="https://youtube.com/playlist?list=PL60k06ybzlYtFEWA0kw4PN224uKqsoaiQ&si=gJqpkEcUyZDdI_35">Interviews
					</a>
				</li>
				<li>
					<a
						className="button"
						href="https://needleinthehayfilm.substack.com">News
					</a>
				</li>
			</ul>
		</>
	)
}

export default Navigation;
