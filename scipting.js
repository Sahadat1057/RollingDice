function rollDice() {
    var die1Value = Math.floor(Math.random() * 6) + 1;
            var die2Value = Math.floor(Math.random() * 6) + 1;

            // Display the values of each die
            document.getElementById("die1").textContent = "Die 1: " + die1Value;
            document.getElementById("die2").textContent = "Die 2: " + die2Value;

            // Calculate and display the combined total
            var total = die1Value + die2Value;
            document.getElementById("total").textContent = "Total: " + total;
}