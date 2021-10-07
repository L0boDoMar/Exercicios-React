import logo from './logo.svg';
import './App.css';
/*Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. */
let a1 = parseFloat(prompt("Infome a nota 1a:"));
let a2 = parseFloat(prompt("Infome a nota 2a:"));

let mediaFinal = (a1 + a2) / 2;

function App() {

    if (mediaFinal >= 6) {
        return (
            <div className="App">
                <p>Aluno Aprovado!</p>
            </div>);
    } else {

        return (
            <div className="App">
                <p>Aluno Reprovado!</p>
            </div>);
    }

}

export default App;