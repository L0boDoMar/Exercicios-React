import logo from './logo.svg';
import './App.css';

//Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor. 
let numero = parseInt(prompt("Digite um número:"));
function App() {

    let antecessor = numero - 1;
    let sucessor = numero +1;
    return (
        <div className="App">
            <p> O antencessor é: {antecessor}</p>
            <p> O sucessor é: {sucessor}</p>
        </div>
    );
}

export default App;