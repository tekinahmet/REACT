const Jsx1 = () => {
  //KURAL: JSX icinde hersey tek 1 parent element icinde olmalidir
  // KURAL: Elementlerin attribute lari camelCase olmalidir
  const errorMessage = "Something went wrong";
  // Bu ifade dogrudan gercek DOM u manipule ettigi icin React ta tercih edlmez.
  // document.getElementById("lblError").textContent = errorMessage;
  return (
    <div className="Jsx1">
      <div>JSX icinde hersey tek bir parent element icinde olmalidir</div>
      <div className="bg-danger" id="lblError">
        <br />
        {errorMessage}
      </div>
      <br />
      <label htmlFor="txtName">
        Elementlerin attribute lari camelCase olmalidir
      </label>
    </div>
  );
};
export default Jsx1;
