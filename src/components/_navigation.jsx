import '../App.css'

function Navigation() {

	function copyURL() {
		const URL = "https://www.needleinthehayfilm.com";
		navigator.clipboard.writeText(URL);
		alert("Website URL copied: " + URL);
	};

	return (
		<>
{/*CALL TO ACTION*/}
			<ul className="call_to_action">
				<li>
					<a
						className="button"
						href="https://seedandspark.com/fund/needle-in-the-hay?token=c0d2cac3031d07d83ccfde4abb6f78da050ad83b808c031bb538173e6b17f6f3#story">Support
					</a>
				</li>
				<li>
					<a
						className="button"
						href="#"
						onClick={copyURL}
						>Share 
					</a>
				</li>
				<li>
					<a
						className="button"
						href="https://needleinthehayfilm.substack.com">Newsletter
					</a>
				</li>
			</ul>
		</>
	)
}

export default Navigation;
