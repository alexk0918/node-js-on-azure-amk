//get dice roll
async function rollDice() {
    try {
        const response = await fetch('/api/dice-roll'); // Make an API call
        if (response.ok) {
            const data = await response.json();
            diceValueInput.value = data.result; // Update the UI with the random value
        } else {
            console.error('API call failed');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
//roll button
rollButton.addEventListener("click", rollDice);