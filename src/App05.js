import logo from './logo.svg';
import './App.css';

/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
de eleitores. */

let eleitores = parseInt(prompt("Digite a quantidade de eleitores em seu município:"));
let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos:"));
let votosNulos = parseInt(prompt("Digite a quantidade de votos Nulos:"));
let votosValidos = parseInt(prompt("Digite a quantidade de votos Validos:"));

function App() {

    let PB = (votosBrancos / eleitores) * 100;
    let PN = (votosNulos / eleitores) * 100;
    let PV = (votosValidos / eleitores) * 100;


    return (
        <div className="App">
            <p> Número de leitores {eleitores}%</p>
            <p> Porcentagem de votos brancos {PB}% </p>
            <p> Porcentagem de votos nulos {PN}%</p>
            <p> Porcentagem de votos válidos {PV}%</p>
        </div>
    );
}

export default App;