
function EmailForm() {
	return (
		<>
			<form
  			action="https://formspree.io/f/xgvzrqzv"
  			method="POST"
			>
  			<label>
    			Your email:
    			<input 
						type="email"
						name="email"
					/>
  			</label>
  			<label>
    			Your message:
    			<textarea
						name="message"></textarea>
			  </label>
  			<button type="submit">SEND</button>
			</form>
		</>
	)
}

export default EmailForm;
