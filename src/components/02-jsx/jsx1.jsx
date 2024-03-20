const Jsx1 = () => {
	//KURAL: JSX icinde hersey tek 1 parent element icinde olmalidir
	// KURAL: Elementlerin attribute lari camelCase olmalidir

	const errorMessage = "Something went wrong";

	// Bu ifade dogrudan gercek DOM u manipule ettigi icin React ta tercih edlmez.
	// document.getElementById("lblError").textContent = errorMessage;

	return (
		<div className="jsx1">
			<div>JSX icinde hersey tek 1 root eement icinde olmalidir</div>

			<div className="bg-danger" id="lblError">
				{errorMessage}
			</div>


            <label htmlFor="name">Elementlerin attribute lari camelCase olmalidir</label>
		</div>
	);
};
export default Jsx1;
