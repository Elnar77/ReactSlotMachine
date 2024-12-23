export default function Slot(){
const values = ["🍉","🍌","🍒","💎"];
//const values = ["A", "B", "C", "D", "E"];
const randIdx = () =>{
    return Math.floor(Math.random() * values.length)} 
const val1 = values[randIdx()];
const val2 = values[randIdx()];
const val3 = values[randIdx()];

 const isWinner = val1 === val2 && val1 === val3;
 const color = {color: isWinner? "green": "red"}
 const result = isWinner? "You Win": "You lose";

 return(
  <div>
    <h1>{val1} {val2} {val3}</h1>
    <h3 style={color}>{result}</h3>
    {isWinner && <h3>Congrats!!!</h3>}
  </div>
 )
}