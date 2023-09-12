function calculateMaturityAmount() {
  // Getting the input values
  const principle = parseFloat(document.getElementById("principle").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const tenure = parseFloat(document.getElementById("tenure").value);

  // Calculating the amount
  const maturityAmount = principle + (principle * interestRate * tenure) / 100;

  // Showing the Value
  document.getElementById(
    "result"
  ).innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateMaturityAmount);
