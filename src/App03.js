import logo from './logo.svg';
import './App.css';

/*Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. */
let base = parseFloat(prompt("Informe a base:"));
let altura = parseFloat(prompt("Informe a altura:"));
function App() {

    let area = base * altura;

    return (
        <div className="App">
            <p> A área do retângulo é: {area}</p>
        </div>
    );
}

export default App;