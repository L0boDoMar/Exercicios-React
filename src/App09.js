import logo from './logo.svg';
import './App.css';

/*  Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius (baseado na fórmula abaixo): */

let celsius = parseFloat(prompt("Informe a temperatura em graus celsius:"));

function App() {

    var fare = (celsius * 1.8) + 32;

    return (
        <div className="App">
            <p>{celsius}°C equivalem a {fare}°F</p>
        </div>
    );
}

export default App;