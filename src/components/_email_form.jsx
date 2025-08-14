
function EmailForm() {
	return (
		<>
			<form
  			action="https://formspree.io/f/xgvzrqzv"
				className="email_form"
  			method="POST"
			>
				<label><h2>Contact Us</h2>
				</label>
  			<label>
    			Your email:<br />
    			<input 
						type="email"
						name="email"
					/>
  			</label>
  			<label>
    			Your message:<br />
    			<textarea
						name="message"></textarea>
			  </label>
  			<button 
					className="email_button"
					type="submit">SEND</button>
			</form>
		</>
	)
}

export default EmailForm;
