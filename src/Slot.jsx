export default function Slot() {
    // Define possible slot machine symbols as an array.
    const values = ["🍉", "🍌", "🍒", "💎"];
    // Uncomment the following line to use alternative symbols (e.g., letters).
    // const values = ["A", "B", "C", "D", "E"];
  
    // Function to generate a random index within the range of the values array.
    const randIdx = () => {
      return Math.floor(Math.random() * values.length);
    };
  
    // Randomly select three symbols for the slot machine.
    const val1 = values[randIdx()];
    const val2 = values[randIdx()];
    const val3 = values[randIdx()];
  
    // Determine if all three symbols are diamonds ("💎").
    const jackpot = val1 === "💎" && val2 === "💎" && val3 === "💎";
    // Check if all three symbols are identical (indicating a win).
    const isWinner = val1 === val2 && val1 === val3;
    // Set text color based on win/loss condition (green for win, red for loss).
    const color = { color: isWinner ? "green" : "red" };
    // Define the result message depending on the outcome.
    const result = isWinner ? "You Win" : "You lose";

 return(
  <div>
    {jackpot && <h1>Jackpot!!!</h1>}
    <h1>{val1} {val2} {val3}</h1>
    <h3 style={color}>{result}</h3>
    {isWinner && <h3>Congrats!!!</h3>}
  </div>
 )
}