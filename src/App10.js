import logo from './logo.svg';
import './App.css';

/*  Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
final é: */

let n1 = parseFloat(prompt("Informe a primeira nota:"));
let n2 = parseFloat(prompt("Informe a segunda nota:"));
let n3 = parseFloat(prompt("Informe a terceira nota:"));

function App() {

    let medFinal= ((n1*2)+(n2*3)+(n3*5))/10;

    return (
        <div className="App">
            <p>Média final: {medFinal}</p>
        </div>
    );
}

export default App;