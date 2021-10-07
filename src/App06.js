import logo from './logo.svg';
import './App.css';

/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.*/

var sal = parseFloat(prompt("Informe o valor do salário:"));
var percent = parseFloat(prompt("Informe o percentual de reajuste:"));

function App() {

    var reajuste = (percent / 100) * sal;
    var novosal = reajuste + sal;

    return (
        <div className="App">
            <p>O valor do salário reajustado é de R${novosal},00.</p>
        </div>
    );
}

export default App;
