import logo from './logo.svg';
import './App.css';

/*Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:*/

var nome = prompt("Qual é o seu nome?");
var altura = parseFloat(prompt("Qual é a sua altura?"));
var sexo = prompt("Qual é o seu sexo? (responder somente com M ou F)");

function App() {

    if (sexo == "m") {

        var pesoIdeal = (72.7 * altura) - 58;
        return (
            <div className="App">
                <p>{nome}, seu peso ideal é {pesoIdeal.toFixed(2)} kg</p>
            </div>);
    } else if (sexo == "f") {
        var pesoIdeal = (62.1 * altura) - 44.7;
        return (
            <div className="App">
                <p>{nome}, seu peso ideal é {pesoIdeal.toFixed(2)} kg</p>
            </div>);
    }

}

export default App;